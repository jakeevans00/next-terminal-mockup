
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-12 py-4 w-full">
      <div className="hero-text font-extrabold text-3xl">
        <span className='underline'>K</span>otz'i'j<span className='text-indigo-200'>.</span><span className='text-yellow-500'>dev</span>
      </div>
      <nav className="">
        <ul className="flex flex-row gap-6">

          <Link href={""}>
            <span className='underline'>W</span>ork
          </Link>
          <Link href={""}>
            <span className='underline'>B</span>log
          </Link>
          <Link href={"documentation"}>
            <span className='underline'>A</span>PI Documentation
          </Link>
        </ul>
      </nav>

    </header>
  );
};

export default Navbar;