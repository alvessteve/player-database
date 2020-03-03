interface Appearances {
  standBy: number;
  standIn: number;
  starter: number;
  total: number;
}

export default interface PlayerStatistics {
  avgRate: number;
  appearances: Appearances;
  goalsConcededByMatch: number;
}
