import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-lg font-bold">
          <Link href="/">
            <a className="text-white">Country Info</a>
          </Link>
        </div>
        <nav className="space-x-4">
          <Link href="/">
            <a className="hover:text-gray-300">Home</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-gray-300">About</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-gray-300">Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
