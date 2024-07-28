
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full flex justify-between items-center px-12 py-6 navbar-bg">
      <div className="logo-text font-extrabold text-3xl hover:text-teal-500">
        <span className='underline'>K</span>otz-ij<span className='text-teal-200'>.</span><span className='text-yellow-500'>dev</span>
      </div>
      <nav className="text-lg">
        <ul className="flex gap-6">

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