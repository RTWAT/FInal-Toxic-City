import { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileHeader';
import Dropdown from './Dropdown';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { name: 'Über uns', link: '/uber-uns' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0">
        <nav className="bg-slate-100 shadow">
          <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse">
              <h3 className="font-marker text-[1.5rem] ml-1 ">Toxic City</h3>
            </Link>
            <Dropdown />
            <ul className="hidden md:flex items-center space-x-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="py-2 px-4 hover:text-gray-500">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              className="md:hidden text-black focus:outline-none"
              onClick={toggleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          {mobileMenuOpen && <MobileMenu />}
        </nav>
      </header>
    </>
  );
}
