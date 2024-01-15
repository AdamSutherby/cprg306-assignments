import { ItemList } from "./item-list";

function Item({ name, quantity, category }) {
  return (
    <li className="p-2 m-4 bg-slate-900 max-w-sm">
      <h2 className="text-xl font-bold">{name}</h2>
      <div className="text-sm">
        Buy {quantity} in {category}
      </div>
    </li>
  );
}

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