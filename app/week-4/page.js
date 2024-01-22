import NewItem from './new-item.js';
import onAdd from './new-item.js';

export default function Page() {
    return (
        <main className='flex justify-center w-full'>
            <div>
            <NewItem />
            </div>
        </main>
    );
}