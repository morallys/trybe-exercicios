import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  //
  private static _count = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
    Ranger._count += 1;
  }

  static createdArchetypeInstances(): number {
    return this._count;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  get name(): string { return super.name; }
  get special(): number { return super.special; }
  get cost(): number { return super.cost; }
}

export default Ranger;
