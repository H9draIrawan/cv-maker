function Introduction() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header className="mx-auto flex max-w-full items-center justify-between px-6 py-5">
        <a className="flex items-center gap-2 text-4xl font-bold tracking-tight">
          Cmaker
        </a>

        <a
          className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          href="#cara-kerja"
        >
          Try Free
        </a>
      </header>

      <section
        className="container mx-auto grid max-w-8/12 items-center gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2"
        id="home"
      >
        <div>
          <h1 className="max-w-lg text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            CV Maker Generator
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-stone-600">
            Tell us about your journey. We’ll help you craft it into a
            professional CV, ready to make the best first impression.{" "}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              className="rounded-full bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg uppercase"
              href="#cara-kerja"
            >
              Create
            </a>
          </div>
        </div>

        <div
          className="relative mx-auto w-full max-w-md rounded-3xl bg-indigo-100 p-6 sm:p-10"
          aria-label="Contoh tampilan CV"
        >
          <article className="rounded-2xl bg-white p-6 shadow-xl shadow-indigo-900/10 sm:p-8">
            <div className="flex items-center justify-between border-b border-stone-100 pb-5 text-xs font-semibold tracking-widest text-stone-400">
              <span>CURRICULUM VITAE</span>
              <span>2026</span>
            </div>
            <div className="flex items-center gap-4 py-6">
              <div className="grid size-14 place-items-center rounded-2xl bg-indigo-100 font-bold text-indigo-700">
                JS
              </div>
              <div>
                <h2 className="text-xl font-bold">John Smith</h2>
                <p className="mt-1 text-sm text-stone-500">Programmer</p>
              </div>
            </div>
            <p className="border-b border-stone-100 pb-5 text-xs text-stone-500">
              Jakarta, Indonesia <span className="px-2">·</span>{" "}
              johnsmith@email.com
            </p>
            <div className="space-y-6 pt-5">
              <div>
                <h3 className="mb-3 text-xs font-bold tracking-widest text-indigo-600">
                  PROFILE
                </h3>
                <div className="space-y-2">
                  <div className="h-2 w-full rounded bg-stone-100" />
                  <div className="h-2 w-11/12 rounded bg-stone-100" />
                  <div className="h-2 w-2/3 rounded bg-stone-100" />
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-xs font-bold tracking-widest text-indigo-600">
                  EXPERIENCE{" "}
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="mt-1 size-2 shrink-0 rounded-full bg-indigo-500" />
                    <div className="w-full space-y-2">
                      <div className="h-2 w-2/3 rounded bg-stone-300" />
                      <div className="h-2 w-full rounded bg-stone-100" />
                      <div className="h-2 w-4/5 rounded bg-stone-100" />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-1 size-2 shrink-0 rounded-full bg-stone-300" />
                    <div className="w-full space-y-2">
                      <div className="h-2 w-1/2 rounded bg-stone-300" />
                      <div className="h-2 w-full rounded bg-stone-100" />
                      <div className="h-2 w-3/4 rounded bg-stone-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex flex-col gap-3 px-6 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <a
            className="flex items-center gap-2 font-bold text-stone-900"
            href="#beranda"
            aria-label="CVora kembali ke atas"
          >
            <span className="grid size-7 place-items-center rounded-lg bg-indigo-600 text-white">
              C
            </span>
            cvora
          </a>
          <p>Small steps for bigger opportunities.</p>
          <span>© 2026 CVora</span>
        </div>
      </footer>
    </main>
  );
}

export default Introduction;
