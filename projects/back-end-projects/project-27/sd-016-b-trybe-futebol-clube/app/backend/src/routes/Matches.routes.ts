import { Router } from 'express';

import MatchesController from '../controller/Matches.controller';
import matches from '../middlewares/matches.middleware';
// import handleToken from '../services/handleToken';

const router = Router();

router
  .get('/', MatchesController.matches)
  .post('/', matches.checkBody, matches.checkTeams, MatchesController.createMatch)
  .patch('/:id', matches.checkId, matches.checkBodyUpdate, MatchesController.updateMatch)
  .patch('/:id/finish', matches.checkId, MatchesController.matchFinish);

export default router;
