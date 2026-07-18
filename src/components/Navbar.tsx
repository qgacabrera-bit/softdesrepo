import { navigationItems } from '../data/mockData';

type NavbarProps = {
  isSidebar: boolean;
};

export function Navbar({ isSidebar }: NavbarProps) {
  return (
    <nav
      className={`w-full transition-all duration-300 ${
        isSidebar ? 'lg:fixed lg:left-4 lg:top-4 lg:z-40 lg:w-48 lg:max-w-[12rem]' : 'lg:relative'
      }`}
    >
      <div
        className={`mx-auto flex gap-2 rounded-[1.5rem] border border-slate-200 bg-white/90 p-3 shadow-soft transition-all duration-300 ${
          isSidebar
            ? 'flex-col lg:mx-0 lg:max-h-[calc(100vh-2rem)] lg:w-48 lg:overflow-auto'
            : 'flex-wrap lg:mx-0 lg:w-full'
        }`}
      >
        {navigationItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 ${
              isSidebar ? 'w-full px-3 py-2 text-xs' : ''
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
