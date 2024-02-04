"use client"
import Link from 'next/link';

export const Navbar = () => {
  return (
    <header className="bg-white bg-opacity-5 text-gray-600 hidden md:block">
      <div className="container mx-auto flex items-center h-24">
        <Link href="/">
          <p className="flex items-center justify-center">
            <img className="h-16" src="https://www.tcnorth.com/wp-content/uploads/2017/03/iStock-615524918-1080x675.jpg" alt="image" />
            <span className="ml-5 uppercase text-gray-600 font-medium">Yann<br/>Lubaki</span>
          </p>
        </Link>
        <nav className="contents font-semibold text-gray-600 text-base lg:text-lg">
          <ul className="mx-auto flex items-center">
            <li className="p-5 xl:p-8">
              <Link href="/">
                <p>
                  <span>Home</span>
                </p>
              </Link>
            </li>
            <li className="p-5 xl:p-8">
              <Link href="/articles">
                <p>
                  <span>Articles</span>
                </p>
              </Link>
            </li>
            <li className="p-5 xl:p-8">
              <Link href="/study">
                <p>
                  <span>Study</span>
                </p>
              </Link>
            </li>
            <li className="p-5 xl:p-8">
              <Link href="/about">
                <p>
                  <span>About</span>
                </p>
              </Link>
            </li>
            <li className="p-5 xl:p-8">
              <Link href="/sources">
                <p>
                  <span>Sources</span>
                </p>
              </Link>
            </li>
          </ul>
        </nav>
        <Link href="/contact">
          <p>
            <button className="border border-amber-800 bg-amber-800 rounded-full text-white font-bold px-8 py-2">Contact me</button>
          </p>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
