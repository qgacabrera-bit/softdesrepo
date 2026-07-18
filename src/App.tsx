import { useEffect, useMemo, useState } from 'react';
import { ActionCards } from './components/ActionCards';
import { DiagnosisSection } from './components/DiagnosisSection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LayoutShell } from './components/LayoutShell';
import { Navbar } from './components/Navbar';
import { analyticsSeries, faqItems } from './data/mockData';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDiagnosisPage, setIsDiagnosisPage] = useState(window.location.hash === '#diagnosis');

  const trendCards = useMemo(() => analyticsSeries, []);

  useEffect(() => {
    const handleHashChange = () => {
      setIsDiagnosisPage(window.location.hash === '#diagnosis');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (isDiagnosisPage) {
    return (
      <LayoutShell>
        <Header onSearch={setSearchQuery} />
        <Navbar />

        <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 lg:px-8">
          <DiagnosisSection />
          <div className="flex flex-wrap gap-3">
            <a href="#home" className="rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400">
              Back to home
            </a>
          </div>
        </main>
      </LayoutShell>
    );
  }

  return (
    <LayoutShell>
      <Header onSearch={setSearchQuery} />
      <Navbar />

      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 lg:px-8">
        <HeroSection />
        <ActionCards query={searchQuery} />

        <section id="analytics" className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Analytics</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-950">Progress tracking and regional trends</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {trendCards.map((entry) => (
                <div key={entry.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-800">{entry.label}</p>
                  <div className="mt-3 space-y-2">
                    <div>
                      <div className="mb-1 flex items-center justify-between text-xs text-slate-500"><span>Recovery</span><span>{entry.recovery}%</span></div>
                      <div className="h-2 rounded-full bg-slate-200"><div className="h-2 rounded-full bg-emerald-500" style={{ width: `${entry.recovery}%` }} /></div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between text-xs text-slate-500"><span>Adherence</span><span>{entry.adherence}%</span></div>
                      <div className="h-2 rounded-full bg-slate-200"><div className="h-2 rounded-full bg-cyan-500" style={{ width: `${entry.adherence}%` }} /></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">FAQ</p>
            <h3 className="mt-2 text-2xl font-semibold">Common questions</h3>
            <div className="mt-6 space-y-4">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">{item.question}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
    </LayoutShell>
  );
}

export default App;
