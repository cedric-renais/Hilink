'use client';

import { nav_links } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from './Button';

const Nav = () => {
  // State management for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the state of the aria-expanded attribute
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the mobile menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="max-wrapper padding-wrapper flex-between relative z-30 py-5">
      <Link href="#">
        <Image
          src="/assets/images/hilink-logo.svg"
          alt="Hilink, page d'accueil."
          width={144}
          height={40}
        />
      </Link>
      <ul className="hidden h-full gap-6 lg:flex">
        {nav_links.map((link) => (
          <li key={link.key}>
            <Link
              className="regular-16 flex-center pb-1.5 text-gray-9 underline-offset-4 hover:text-green-9 hover:underline"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="lg:flex-center hidden">
        <Button
          type="button"
          title="Login"
          icon="/assets/icons/user.svg"
          variant="button-green"
        />
      </div>
      <button
        className="inline-block lg:hidden"
        type="button"
        aria-controls="navigation"
        aria-expanded={isMenuOpen}
        onClick={handleMenuToggle}
      >
        <span className="sr-only">Menu</span>
        {isMenuOpen ? (
          <Image src="/assets/icons/close.svg" alt="" width={40} height={40} />
        ) : (
          <Image src="/assets/icons/menu.svg" alt="" width={40} height={40} />
        )}
      </button>
      {isMenuOpen && (
        <ul
          className="absolute right-5 top-20 flex flex-col gap-6 rounded-xl border border-green-6 bg-green-9 px-8 py-8 shadow shadow-green-9 lg:hidden"
          id="navigation"
        >
          {nav_links.map((link) => (
            <li key={link.key}>
              <Link
                className="regular-16 flex-start pb-1.5 text-gray-1"
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <Button
            type="button"
            title="Login"
            icon="/assets/icons/user.svg"
            variant="button-gray"
          />
        </ul>
      )}
    </nav>
  );
};

export default Nav;
