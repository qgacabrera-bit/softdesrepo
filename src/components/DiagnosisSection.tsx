const concernOptions = [
  'Feeling down for a long time',
  'Trouble sleeping or eating',
  'Worrying a lot',
  'Using more alcohol or drugs than planned',
  'Not sure yet',
];

const nextStepOptions = [
  'Talk to a doctor or nurse',
  'Reach out to a counselor or support worker',
  'Visit a nearby care center',
  'Call a trusted person today',
];

export function DiagnosisSection() {
  return (
    <section id="diagnosis" className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-6 shadow-soft md:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">Get diagnosis</p>
          <h3 className="text-3xl font-semibold text-slate-800">A simple check to help you know what to do next</h3>
          <p className="text-sm leading-6 text-slate-600">
            We are not medical experts, and this page only gives suggestions, not a real diagnosis.
          </p>
          <p className="text-sm leading-6 text-slate-600">
            If you feel unsafe, have severe symptoms, or think this may be urgent, contact local emergency help right away.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700">What are you noticing?</label>
              <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 focus:border-amber-300 focus:outline-none">
                {concernOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">How long has this been going on?</label>
              <input
                type="text"
                placeholder="For a few days, weeks, or months"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-amber-300 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Anything else to share?</label>
              <textarea
                rows={4}
                placeholder="Add a short note if you want"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-amber-300 focus:outline-none"
              />
            </div>

            <button className="rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-400">
              Get a recommendation
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Suggested next steps</p>
          <div className="mt-4 space-y-3">
            {nextStepOptions.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
            This is a recommendation page only. It does not replace a doctor, therapist, or emergency care.
          </div>
        </div>
      </div>
    </section>
  );
}