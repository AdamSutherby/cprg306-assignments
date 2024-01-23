'use client';

import { ItemList } from "./item-list";

function Item({ name, quantity, category }) {
  return (
    <li className="p-2 m-4 bg-comet-800 max-w-sm border border-solid border-melrose-300 hover:bg-comet-600 hover:scale-105 transform-all rounded" onClick={handleItemClick}>
      <h2 className="text-xl font-bold">{name}</h2>
      <div className="text-sm">
        Buy {quantity} in {category}
      </div>
    </li>
  );
}

const handleItemClick = (event) => {
  const element = event.currentTarget;
  element.classList.toggle('line-through');
  element.classList.toggle('opacity-50');
};

export default function CurrentItem() {
  const items = [];
  const itemListArray = ItemList();

  for (let index = 0; index < itemListArray.length; index++) {
    const item = itemListArray[index];
    items.push(
      <Item
        key={index}
        name={item.name}
        quantity={item.quantity}
        category={item.category}
      />
    );
  }

  return <ul>{items}</ul>;
}