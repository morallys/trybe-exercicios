import { Router } from 'express';

import TeamsController from '../controller/Teams.controller';

const router = Router();

router
  .get('/', TeamsController.teamsFindAll)
  .get('/:id', TeamsController.teamsFindByPk);

export default router;
