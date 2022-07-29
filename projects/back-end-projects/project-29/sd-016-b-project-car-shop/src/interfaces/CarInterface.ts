import { z } from 'zod';
import { VehicleSchema } from './VehicleInterface';

export const CarSchema = VehicleSchema.extend({
  doorsQty: z
    .number({})
    .gte(2, { message: 'doorsQty must not be lower 2' })
    .lte(4, { message: 'Year must not be greater than 4' }),
  seatsQty: z
    .number({})
    .gte(2, { message: 'doorsQty must not be lower 2' })
    .lte(7, { message: 'Year must not be greater than 4' }),
});

export type Car = z.infer<typeof CarSchema>;
