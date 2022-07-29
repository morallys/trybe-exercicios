// import { StatusCodes } from 'http-status-codes';

import Matches from '../database/models/matches';
import Teams from '../database/models/teams';
import EmptyLeaderboard from './EmptyLeaderboard.services';
import leaderboardsType from '../types/leaderboards';

export default class LeaderboardServices {
  //
  private _teamsModel: typeof Teams;
  private _matchesModel: typeof Matches;
  private _emptyLeaderboard: typeof EmptyLeaderboard;

  constructor() {
    this._teamsModel = Teams;
    this._matchesModel = Matches;
    this._emptyLeaderboard = EmptyLeaderboard;
  }

  private static orderLeaderboard(result: leaderboardsType[]): leaderboardsType[] {
    const order = result.sort((a, b): number => {
      if (a.totalPoints !== b.totalPoints) return b.totalPoints - a.totalPoints;
      if (a.totalVictories !== b.totalVictories) return b.totalVictories - a.totalVictories;
      if (a.goalsBalance !== b.goalsBalance) return b.goalsBalance - a.goalsBalance;
      if (a.goalsFavor !== b.goalsFavor) return b.goalsFavor - a.goalsFavor;
      if (a.goalsOwn !== b.goalsOwn) return b.goalsOwn - a.goalsOwn;

      return 0;
    });

    return order;
  }

  private static async mountLeaderboard(data: EmptyLeaderboard, team: string) {
    //
    const efficiency = Number(((data._totalPoints / (data._totalGames * 3)) * 100).toFixed(2));

    const leaderboard = {
      name: team,
      totalPoints: data._totalPoints,
      totalGames: data._totalGames,
      totalVictories: data._totalVictories,
      totalDraws: data._totalDraws,
      totalLosses: data._totalLosses,
      goalsFavor: data._goalsFavor,
      goalsOwn: data._goalsOwn,
      goalsBalance: data._goalsFavor - data._goalsOwn,
      efficiency,
    };

    return leaderboard;
  }

  private leaderboard(matchesHome: Matches[]) {
    const emptyLeaderboard = new this._emptyLeaderboard();

    matchesHome.forEach((match) => {
      emptyLeaderboard._name = match.homeTeam;
      emptyLeaderboard._goalsFavor += match.homeTeamGoals;
      emptyLeaderboard._goalsOwn += match.awayTeamGoals;

      if (match.homeTeamGoals === match.awayTeamGoals) emptyLeaderboard._totalDraws += 1;
      else if (match.homeTeamGoals > match.awayTeamGoals) emptyLeaderboard._totalVictories += 1;
      else if (match.homeTeamGoals < match.awayTeamGoals) emptyLeaderboard._totalLosses += 1;
    });

    emptyLeaderboard._totalGames = matchesHome.length;
    emptyLeaderboard._totalPoints = (
      (emptyLeaderboard._totalVictories * 3) + emptyLeaderboard._totalDraws);

    return emptyLeaderboard;
  }

  async leaderboardHome(): Promise<leaderboardsType[]> {
    const teams = await this._teamsModel.findAll();

    const promises = teams.map(async (team) => {
      const matchesHome = await this._matchesModel.findAll({
        where: { homeTeam: team.id, inProgress: false },
        raw: true,
      });

      const insertData = this.leaderboard(matchesHome);

      const mount = await LeaderboardServices.mountLeaderboard(insertData, team.teamName);

      return mount;
    });

    const result = await Promise.all(promises);

    return LeaderboardServices.orderLeaderboard(result);
  }
}
