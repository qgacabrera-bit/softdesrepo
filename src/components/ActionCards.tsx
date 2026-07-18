import { facilities, registryRows } from '../data/mockData';

import mapImage from './mampbg.png';
type ActionCardsProps = {
  query: string;
};

export function ActionCards({ query }: ActionCardsProps) {
  const filteredFacilities = facilities.filter((facility) => {
    const searchText = `${facility.name} ${facility.region} ${facility.careType}`.toLowerCase();
    return searchText.includes(query.toLowerCase());
  });

  return (
    <section id="portal" className="grid gap-6 lg:grid-cols-2">
      <article className="rounded-[1.75rem] border border-slate-200 bg-white/90 p-6 shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">Private access</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-800">Search by ID code</h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
              Use a simple ID code instead of a name. That keeps things private while still letting you find the right record quickly.
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <label className="text-sm font-medium text-slate-700">ID code</label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              defaultValue="SUB-89B2X"
              className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-sky-300 focus:outline-none"
              placeholder="SUB-89B2X"
            />
            <button className="rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400">
              Check
            </button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {registryRows.map((row) => (
              <div key={row.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-800">{row.id}</p>
                <p className="mt-1 text-sm text-slate-600">{row.careCategory}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.22em] text-sky-700">{row.biometricMatch}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      <article
        id="facilities"
        className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-6 shadow-soft"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)), url(${mapImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Find care nearby</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-800">See current openings</h3>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
            Filter by area and care type to find open beds, outpatient help, and support services.
          </p>
        </div>

        <div className="mt-6 grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-slate-700">Area / city</label>
            <input
              type="text"
              placeholder="Central District"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 focus:border-emerald-300 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Type of help</label>
            <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 focus:border-emerald-300 focus:outline-none">
              <option>Detox</option>
              <option>Outpatient therapy</option>
              <option>Psychiatric care</option>
              <option>Community support</option>
            </select>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {filteredFacilities.map((facility) => (
            <div key={facility.name} className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:shadow-sm">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h4 className="text-base font-semibold text-slate-800">{facility.name}</h4>
                  <p className="text-sm text-slate-600">{facility.region} • {facility.careType}</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                  {facility.bedsAvailable} beds open
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {facility.supportPrograms.map((program) => (
                  <span key={program} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {program}
                  </span>
                ))}
                <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">{facility.contactToken}</span>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
