"use client";
import { useState } from 'react';
import {  type PlayerProps } from '../types/PlayerProps';
import Player from './player';
import Search from './search';

export default function PlayerList({ players }: { players: PlayerProps[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [positionFilter, setPositionFilter] = useState<string | null>(null);

  const filteredPlayers = players.filter((item) =>
    item.player.full_name.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter((item) => {
    if (!positionFilter) return true;
    return item.player.position === positionFilter;
  });

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleFilterByPosition = (position: string | null) => {
    setPositionFilter(position);
  };

  return (
    <div className="font-sans">
      <Search onSearch={handleSearch} onClearSearch={() => setSearchTerm('')} onFilterByPosition={handleFilterByPosition} />
      {filteredPlayers.map((item, index) => (
        <Player key={index} player={item.player} />
      ))}
    </div>
  );
}
