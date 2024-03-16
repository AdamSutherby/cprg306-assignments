'use client';

import ItemList from './item-list.js';
import NewItem from './new-item.js';
import MealIdeas from './meal-ideas.js';
import { useState } from 'react';
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const { user, firebaseSignOut } = useUserAuth();

  if (!user) {
    return (
      <div>
        <h1>Please log in to view your shopping list.</h1>
        <button
          className="w-24 p-2 m-2 ml-16 bg-orange-500 text-white rounded hover:bg-orange-900"
          onClick={() => (location.href = "/week-8")}
        >
          Sign in page
        </button>
      </div>
    );
  }

  const handleItemSelect = (ingredient) => {
    const cleanedIngredient = ingredient.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
    console.log('item selected');
    console.log(cleanedIngredient);
    setSelectedItem(cleanedIngredient)
  };

  

    return (
      <main className="bg-gradient-to-r from-comet-950 to-comet-500">
        <div className = 'flex flex-row'>
          <div>
          <h2 className="font-bold text-3xl m-2 p-2">Shopping List</h2>
          <div>
          <NewItem items={items} setItems={setItems} />
          </div>
          <div className='flex flex-row'>
          <ul>
          <ItemList items={items} onItemSelect={handleItemSelect} />
            </ul>
        <MealIdeas ingredient={selectedItem} />
        </div>
        </div>
        </div>
      </main>
    );
  }