export type PlayerProps = {
  player: {
    full_name: string;
    position: string;
    team: string;
    search_rank: number;
    picked?: boolean;
  };
};