"use client";
import { useState } from 'react';
import {  type PlayerProps } from '../types/PlayerProps';
import Player from './player';
import Search from './search';

export default function PlayerList({ players }: { players: PlayerProps[] }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlayers = players.filter((item) =>
    item.player.full_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="font-sans">
      <Search onSearch={handleSearch} onClearSearch={() => setSearchTerm('')} />
      {filteredPlayers.map((item, index) => (
        <Player key={index} player={item.player} />
      ))}
    </div>
  );
}
