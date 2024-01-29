'use client';

export default function Item({ name, quantity, category }) {
  return (
    <li className="p-2 m-4 bg-comet-800 max-w-sm border border-solid border-melrose-300 hover:bg-comet-600 hover:scale-105 transform-all rounded" onClick={handleItemClick}>
      <h2 className="text-xl font-bold capitalize">{name}</h2>
      <div className="text-sm flex flex-row">
        <p>Buy {quantity} in <span className="capitalize">{category}</span>
        </p>
      </div>
    </li>
  );
}

const handleItemClick = (event) => {
  const element = event.currentTarget;
  element.classList.toggle('line-through');
  element.classList.toggle('opacity-50');
};
