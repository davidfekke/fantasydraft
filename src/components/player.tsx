"use client";

import { useState } from "react";
import { type PlayerProps } from '../types/PlayerProps';

export default function Player({ player }: PlayerProps) {
  const [strikethrough, setStrikethrough] = useState(false);

  const handleOnClick = () => {
    player.picked = !player.picked;
    setStrikethrough(!strikethrough);
  };

  return (
    <div className="border p-4 rounded-xl m-4" onClick={handleOnClick}>
      <h2 className={`text-xl font-bold ${player.picked ? "line-through" : ""}`}>{player.full_name}</h2>
      <p className={`text-gray-600 ${player.picked ? "line-through" : ""}`}>
  {player.position}
  {player.team ? ` - ${player.team}` : ''}: rank {player.search_rank ?? '-'}
      </p>
    </div>
  );
}
