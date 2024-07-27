
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-12 py-4 w-full">
      <div className="">
        Kotz'i'j Portfolio 2024
      </div>
      <nav className="">
        <ul className="flex flex-row gap-6">
          <li>
            <span className='underline'>A</span>PI Documentation
          </li>
          <li>
          <span className='underline'>W</span>ork
          </li>
          <li>
          <span className='underline'>B</span>log
          </li>
          <li>
          <span className='underline'>C</span>ontact
          </li>
        </ul>
      </nav>
      
    </header>
  );
};

export default Navbar;