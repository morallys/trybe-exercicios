import { Express } from 'express';

import LoginRoutes from './Login.routes';
import TeamsRoutes from './Teams.routes';
import MatchesRoutes from './Matches.routes';
import LeaderboardRoutes from './Leaderboard.routes';
import errorMiddleware from '../middlewares/middlewareError';

const routes = (app: Express) => {
  app.use('/login', LoginRoutes);
  app.use('/teams', TeamsRoutes);
  app.use('/matches', MatchesRoutes);
  app.use('/leaderboard', LeaderboardRoutes);

  app.use(errorMiddleware);
};

export default routes;
