type HeaderProps = {
  onSearch: (query: string) => void;
};

import logoImage from './Logo_SD_1.png';

export function Header({ onSearch }: HeaderProps) {
  return (
    <header className="border-b border-slate-200/80 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <img src={logoImage} alt="Site logo" className="h-20 w-20 object-contain" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Care support page</p>
              <h1 className="text-lg font-semibold text-slate-800 md:text-2xl">Substance Abuse Recovery Support and Care Finder</h1>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 px-3 py-2 shadow-soft">
            <input
              type="search"
              placeholder="Search by ID code or place"
              className="w-full min-w-[220px] bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
              onChange={(event) => onSearch(event.target.value)}
            />
            <button className="rounded-xl bg-sky-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-sky-400">
              Search
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
