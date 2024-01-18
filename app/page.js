import Link from 'next/link';

export default function Page() {
  return <main>
    <h1 className='text-2xl text-cyan-500 font-serif'>
    CPRG 306: Web Development 2 - Assignments
    </h1>
    <h2>by: Adam Sutherby</h2>
  <ul>
    <li>
      <Link href='week-2'>Week 2</Link>
    </li>
    <li>
      <Link href='week-3'>Week 3</Link>
    </li>
    </ul>
    </main>;
}