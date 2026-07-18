export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-sky-50 px-6 py-10 shadow-soft md:px-10 md:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(167,243,208,0.15),_transparent_30%)]" />
      <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
            Private. Clear. Helpful.
          </span>
          <div className="space-y-4">
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-800 md:text-6xl">
              Substance abuse recovery is within your fingertips.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              This page keeps things private, clear, and respectful. Use a simple ID code, find local care, and check progress without using names.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-white/80 px-4 py-2 text-slate-700 ring-1 ring-slate-200">Private ID codes</span>
            <span className="rounded-full bg-white/80 px-4 py-2 text-slate-700 ring-1 ring-slate-200">Easy navigation</span>
            <span className="rounded-full bg-white/80 px-4 py-2 text-slate-700 ring-1 ring-slate-200">Simple progress stats</span>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200/80 bg-white/85 p-5 shadow-soft backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Learn more</p>
              <p className="mt-1 text-sm text-slate-600">Recovery help and support</p>
            </div>
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-sky-100 text-sky-700 ring-1 ring-sky-200">
              <span className="text-xl">◐</span>
            </div>
          </div>
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-800">Private access</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">Use an ID code to get started.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-800">Find care</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">Nearby help, services, and support groups.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
