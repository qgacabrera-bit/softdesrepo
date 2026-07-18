import { navigationItems } from '../data/mockData';

export function Navbar() {
  return (
    <nav className="sticky top-[88px] z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 py-3 lg:px-8">
        {navigationItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
