import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-500">404</p>
        <h1 className="mt-4 text-4xl font-black text-white">Página não encontrada</h1>
        <p className="mt-4 text-zinc-400">A página que você procura não existe ou foi movida.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-gradient-to-r from-brand-500 to-accent px-6 py-3 font-semibold text-white">Voltar ao início</Link>
      </div>
    </main>
  )
}
