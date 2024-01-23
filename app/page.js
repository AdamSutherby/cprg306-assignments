import SideBar from './sidebar.js';
import './fonts/DS-DIGIT.ttf'

export default function Page() {
  return <main>
    <h1 className='text-5xl text-green-500 DS-DIGIT flex justify-center pt-4'>
    CPRG 306: Web Development 2 - Assignments
    </h1>
    <SideBar />
    </main>;
}