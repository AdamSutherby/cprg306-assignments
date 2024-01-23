'use client';

import Link from 'next/link';
import { RiNumber2, RiNumber3, RiNumber4, RiNumber5 } from "react-icons/ri";


export default function SideBar() {
  const SideBarIcon = ({ icon }) => {
    return (
      <div className="flex justify-start pl-10 py-3">
        <div className="relative flex items-center justify-center h-16 w-16 mx-auto my-auto text-green-500
        rounded hover:rounded-3xl transition-all border border-green-500">
          {icon}
        </div>
      </div>
    );
  };

  return (
    <ul className="fixed top-0 left-0 h-screen w-1/8 m-0 flex flex-col shadow-lg justify-start">
      <li className='flex flex-row group pt-10'>
        <Link href='week-2' className='flex items-center p-3 pt-8'>
          <SideBarIcon icon={<RiNumber2 size={40} />} />
          <span className="ml-2 text-3xl opacity-0 group-hover:opacity-100 transition-opacity p-2 text-green-500 DS-DIGIT">Week 2</span>
        </Link>
      </li>
      <li className='flex flex-row group'>
        <Link href='week-3' className='flex items-center p-3'>
          <SideBarIcon icon={<RiNumber3 size={40} />} />
          <span className="ml-2 text-3xl opacity-0 group-hover:opacity-100 transition-opacity p-2 text-green-500 DS-DIGIT">Week 3</span>
        </Link>
      </li>
      <li className='flex flex-row group'>
        <Link href='week-4' className='flex items-center p-3'>
          <SideBarIcon icon={<RiNumber4 size={40} />} />
          <span className="ml-2 text-3xl opacity-0 group-hover:opacity-100 transition-opacity p-2 text-green-500 DS-DIGIT">Week 4</span>
        </Link>
      </li>
      <li className='flex flex-row group'>
        <Link href='week-5' className='flex items-center p-3'>
          <SideBarIcon icon={<RiNumber5 size={40} />} />
          <span className="ml-2 text-3xl opacity-0 group-hover:opacity-100 transition-opacity p-2 text-green-500 DS-DIGIT">Week 5</span>
        </Link>
      </li>
    </ul>
  );
}
