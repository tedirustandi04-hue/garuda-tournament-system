import Link from 'next/link';

const categories = ['KU-8','KU-9','KU-10','KU-11','KU-12','KU-13','KU-14','KU-15'];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="font-black tracking-wide"><span className="text-red-500">GTS</span> GARUDA TOURNAMENT</div>
        <div className="flex gap-5 text-sm text-neutral-300">
          <Link href="/tournament">Kompetisi</Link><Link href="/login">Login</Link>
        </div>
      </nav>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 text-sm font-bold uppercase tracking-[.3em] text-red-400">Football Tournament Management</p>
        <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">Satu Platform untuk Kompetisi Sepak Bola Usia Dini.</h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-300">Kelola pendaftaran klub, pemain, official, jadwal, hasil pertandingan, klasemen, dan ID Card dalam satu sistem.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link className="rounded-lg bg-red-600 px-6 py-3 font-bold" href="/register">Daftarkan Klub</Link>
          <Link className="rounded-lg border border-neutral-600 px-6 py-3 font-bold" href="/tournament">Lihat Kompetisi</Link>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="mb-5 text-2xl font-bold">Kategori Usia</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{categories.map(c => <div key={c} className="rounded-xl border border-neutral-800 bg-neutral-900 p-5 text-center text-xl font-black">{c}</div>)}</div>
      </section>
      <footer className="border-t border-neutral-800 px-6 py-6 text-center text-sm text-neutral-500">© {new Date().getFullYear()} Garuda Tournament System</footer>
    </main>
  );
}
