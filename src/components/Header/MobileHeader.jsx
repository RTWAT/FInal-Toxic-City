export default function MobilHeader() {
  return (
    <div className="md:hidden">
      <ul className="flex flex-col space-y-2 p-4">
        {['Home', 'Services', 'Pricing', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href="#"
              className="py-2 px-4 rounded hover:bg-slate-200 transition">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
