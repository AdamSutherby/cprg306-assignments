import CurrentItem from './item.js';
import Item from './item.js';

export default function Page() {

    return (
      <main class="bg-slate-950">
        <h2 class="text-3x1 font-bold m-2">Shopping List</h2>
        <ul>
        <CurrentItem />
        </ul>
      </main>
    );
  }