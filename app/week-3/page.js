import CurrentItem from './item.js';
import Item from './item.js';

export default function Page() {

    return (
      <main className="bg-gradient-to-r from-comet-950 to-comet-500">
        <div>
          <h2 className="font-bold text-3xl m-2 p-2">Shopping List</h2>
          <ul>
            <CurrentItem />
          </ul>
        </div>
      </main>
    );
  }