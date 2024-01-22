"use client";

import { useState } from "react";

export default function NewItem({ onAdd }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    function handleSubmit(event) {
        event.preventDefault();
        const item = { name, quantity, category };
        console.log("new item", item);
        alert(`Added ${quantity} ${name} from ${category}`);
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <form onSubmit={handleSubmit} className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
            <div className="mb-2">
            <label>
                <input
                    type="text"
                    className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                    placeholder="Item Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
            </label>
            </div>
            <div className="flex justify-between">
            <label>
                <input
                    type="number"
                    className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                    min='1'
                    max='99'
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                    required
                />
            </label>
            <label className="">
                <select
                    value={category}
                    className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                    onChange={(event) => setCategory(event.target.value)}
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozenFoods">Frozen Foods</option>
                    <option value="cannedGoods">Canned Goods</option>
                    <option value="dryGoods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </label>
            </div>
            <button type="submit" className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">+</button>
        </form>
);
}

