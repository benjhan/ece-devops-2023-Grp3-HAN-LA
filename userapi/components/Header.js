import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div style={{ backgroundColor: '#d3e4b7' }} className="p-4 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="/pepegym_logo.png" alt="Logo PepeGYM" className="w-20 h-20" />
          <div className="text-4xl font-bold text-black-800">PepeGYM</div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/" passHref><button className="text-sm">Home</button></Link>
          <Link href="/articles" passHref><button className="text-sm">Articles</button></Link>
          <Link href="/contacts" passHref><button className="text-sm">Contacts</button></Link>
          <Link href="/about" passHref><button className="text-sm">Cart</button></Link>
        </div>
      </div>
    </div>
  );
}
