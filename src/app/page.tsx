// nfl draft list is a key/value object. How do I type that?
import PlayerList from '@/components/playerlist';

import draftlistJson from '../nfl.customization.json';

interface DraftItem {
  full_name: string;
  position: string | null;
  team: string | null;
  search_rank: number | null;
}

const draftlist = draftlistJson as unknown as Record<string, DraftItem>;

export default function Home() {
  const keylist = Object.keys(draftlist)
    .filter((key) => {
      const item = draftlist[key];
      return (
        item.search_rank !== null &&
        item.search_rank < 9_999_999 &&
        item.full_name !== 'Player Invalid' &&
        item.full_name !== 'Duplicate Player' &&
        !item.full_name.includes('DUPLICATE')
      );
    })
    .sort((a, b) => {
      // Non-null due to the filter above
      return (draftlist[a].search_rank! - draftlist[b].search_rank!);
    });
  return (
    <div className="font-sans">
      <PlayerList players={keylist.map((key) => ({ player: draftlist[key] }))} />
    </div>
  );
}
