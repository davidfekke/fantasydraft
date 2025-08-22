// nfl draft list is a key/value object. How do I type that?
import PlayerList from '@/components/playerlist';

import draftlistJson from '../nfl.customization.json';

interface DraftItem {
  full_name: string;
  position: string;
  team: string;
  search_rank: number;
}

const draftlist = draftlistJson as Record<string, DraftItem>;

export default function Home() {
  const keylist = Object.keys(draftlist).sort((a, b) => {
    return draftlist[a].search_rank - draftlist[b].search_rank;
  }).filter(key => {
    const item = draftlist[key];
    return (item.search_rank < 9999999 && 
      item.full_name !== 'Player Invalid' && 
      item.full_name !== 'Duplicate Player' &&
      !item.full_name.includes('DUPLICATE') &&
      item.search_rank !== null
    );
  });
  return (
    <div className="font-sans">
      <PlayerList players={keylist.map((key) => ({ player: draftlist[key] }))} />
    </div>
  );
}
