'use client';

import ItemList from './item-list.js';
import NewItem from './new-item.js';
import MealIdeas from './meal-ideas.js';
import { useState } from 'react';

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  function handleItemSelect() {
    text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
    console.log('item selected');
    console.log(selectedItem);
  }

    return (
      <main className="bg-gradient-to-r from-comet-950 to-comet-500">
        <div>
          <h2 className="font-bold text-3xl m-2 p-2">Shopping List</h2>
          <div>
          <NewItem items={items} setItems={setItems} />
          </div>
          <ul>
            <ItemList items={items} />
            </ul>
        </div>
        <MealIdeas />
      </main>
    );
  }