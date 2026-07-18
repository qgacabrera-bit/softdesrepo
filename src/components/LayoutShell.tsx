import type { ReactNode } from 'react';

import backgroundImage from './background.png';

export function LayoutShell({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-screen text-slate-900"
      style={{
        backgroundImage: `linear-gradient(rgba(247, 244, 238, 0.78), rgba(239, 242, 247, 0.84)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {children}
    </div>
  );
}
