import PlayerStatistics from './PlayerStatistics';

export default interface Player {
  id: string;
  firstname: string;
  lastname: string;
  ultraPosition: number;
  stats: PlayerStatistics;
  jerseyNum: number;
}
