import { SectionHeading } from '@/components/ui/section-heading'

export default function AboutPageContent() {
  return (
    <main className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow="Sobre" title="Uma presença premium para marcas que querem crescer" description="O PizzaHub foi pensado como um template escalável, profissional e altamente focado em conversão." />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.35)]">
            <h3 className="text-2xl font-semibold text-slate-900">Visão</h3>
            <p className="mt-4 text-slate-600">Transformar cada visitante em cliente através de uma experiência visual robusta, confiável e construída para gerar ação.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.35)]">
            <h3 className="text-2xl font-semibold text-slate-900">Estrutura</h3>
            <p className="mt-4 text-slate-600">A arquitetura foi organizada para ser reutilizada por qualquer pizzaria sem perder qualidade, identidade e performance.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
