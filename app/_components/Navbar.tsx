
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-12 py-4 w-full">
      <div className="hero-text font-extrabold text-3xl">
        <span className='underline'>K</span>otz-ij<span className='text-indigo-200'>.</span><span className='text-yellow-500'>dev</span>
      </div>
      <nav className="text-lg">
        <ul className="flex flex-row gap-6">

          <Link href={""} className='hover:text-indigo-400 no-select'>
            <span className='underline'>W</span>ork
          </Link>
          <Link href={""} className='hover:text-indigo-400'>
            <span className='underline'>B</span>log
          </Link>
          <Link href={"documentation"} className='hover:text-indigo-400'>
            <span className='underline'>A</span>PI Docs
          </Link>
        </ul>
      </nav>

    </header>
  );
};

export default Navbar;