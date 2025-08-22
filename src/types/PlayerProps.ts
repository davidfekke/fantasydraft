export type PlayerProps = {
  player: {
    full_name: string;
  position: string | null;
  team: string | null;
  search_rank: number | null;
    picked?: boolean;
  };
};