import { Link } from 'react-router-dom';

export default function MobileHeader() {
  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Über uns', link: '/uber-uns' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <div className="md:hidden">
      <ul className="flex flex-col space-y-2 p-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.link}
              className="block py-2 px-4 rounded hover:bg-slate-200 transition">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
