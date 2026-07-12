import { SectionHeading } from '@/components/ui/section-heading'

const steps = [
  { title: 'Escolha', description: 'Navegue pelo cardápio e encontre o sabor ideal para o momento.' },
  { title: 'Monte', description: 'Personalize ingredientes, tamanhos e observações com facilidade.' },
  { title: 'Peça', description: 'Finalize em poucos passos e envie direto para o WhatsApp.' },
  { title: 'Receba', description: 'Seu pedido chega com agilidade e confiança.' },
]

export default function HowItWorksSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow="Como Funciona" title="Do desejo ao pedido em poucos passos" description="O fluxo foi criado para guiar o usuário de forma natural para a conversão." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-[1.5rem] border border-slate-200 bg-[#FFFDF8] p-8 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.35)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF7ED] text-lg font-black text-[#D62828]">0{index + 1}</div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
