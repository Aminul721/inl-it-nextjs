const stack = [
  ["Framework", "Next.js 16.4.6"],
  ["UI", "React 19.3"],
  ["Styling", "Tailwind CSS 4.3"],
] as const;

export default function HomePage() {
  return (
    <main className="col-auto grid min-h-screen">
      <section className="border-border bg-surface w-full max-w-2xl rounded-2xl border p-8 shadow-sm sm:p-12">
        <p className="text-primary text-sm font-medium tracking-wide">INL IT</p>
        <h1 className="text-h1 text-heading mt-3 font-semibold tracking-tight">
          Your app foundation is ready.
        </h1>
        <p className="text-text mt-5 max-w-xl text-base leading-7">
          Build routes in <code className="font-mono text-sm">src/app</code> and
          share reusable UI from{" "}
          <code className="font-mono text-sm">src/components</code>.
        </p>
        <dl className="mt-8 grid gap-3 sm:grid-cols-3">
          {stack.map(([label, version]) => (
            <div className="bg-surface-muted rounded-xl p-4" key={label}>
              <dt className="text-text text-xs font-medium tracking-wide uppercase">
                {label}
              </dt>
              <dd className="text-heading mt-1 font-medium">{version}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
