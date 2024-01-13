import CurrentItem from './item.js';
import Item from './item.js';

export default function Page() {

    return (
      <main class="bg-slate-950">
        <div>        <h2 class="text-3x1 font-bold text-3xl m-2">Shopping List</h2>
        <ul>
        <CurrentItem />
        </ul>
        </div>
      </main>
    );
  }