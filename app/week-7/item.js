'use client';

import { useState } from 'react';

export default function Item({ name, quantity, category, onSelect }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleItemClick() {
    console.log('item clicked:', name);
    onSelect && onSelect();
    setIsClicked(true);
  }

  return (
    <li className={`p-2 m-4 bg-comet-800 max-w-sm border border-solid border-melrose-300 hover:bg-comet-600 hover:scale-105 transform-all rounded ${isClicked ? 'scale-105' : ''}`} onClick={handleItemClick}>
      <h2 className="text-xl font-bold capitalize">{name}</h2>
      <div className="text-sm flex flex-row">
        <p>Buy {quantity} in <span className="capitalize">{category}</span>
        </p>
      </div>
    </li>
  );
}