import { Router } from 'express';

import LeaderboardController from '../controller/Leaderboard.controller';

const router = Router();

router
  .get('/home', LeaderboardController.leaderboardAll);

export default router;
