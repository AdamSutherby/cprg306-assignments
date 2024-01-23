'use client';

import Item from "./item";
import { useState } from "react";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = items.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    if (sortBy === 'groupedCategory') {
      return a.category.localeCompare(b.category);
    }
    return a.quantity - b.quantity;
  });

  const renderGroupedItems = () => {
    const groupedItems = {};
    sortedItems.forEach((item) => {
      const category = item.category;
      if (!groupedItems[category]) {
        groupedItems[category] = [];
      }
      groupedItems[category].push(item);
    });

    return Object.entries(groupedItems).map(([category, itemsInCategory]) => (
      <div key={category}>
        <h2 className="text-lg font-bold mb-2 capitalize px-4">{category}</h2>
        {itemsInCategory.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    ));
  };

  return (
    <div>
      <div>
        <button
          className={`bg-${sortBy === 'name' ? 'melrose-600' : 'melrose-500'} text-white font-bold py-2 px-4 rounded m-2`}
          onClick={() => setSortBy('name')}
        >
          Sort by Name
        </button>
        <button
          className={`bg-${sortBy === 'category' ? 'melrose-600' : 'melrose-500'} text-white font-bold py-2 px-4 rounded m-2`}
          onClick={() => setSortBy('category')}
        >
          Sort by Category
        </button>
        <button
          className={`bg-${sortBy === 'groupedCategory' ? 'melrose-600' : 'melrose-500'} text-white font-bold py-2 px-4 rounded m-2`}
          onClick={() => setSortBy('groupedCategory')}
        >
          Sort by Grouped Category
        </button>
      </div>

      {sortBy === 'groupedCategory' ? (
        renderGroupedItems()
      ) : (
        sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))
      )}
    </div>
  );
}
