import { SectionHeading } from '@/components/ui/section-heading'

export default function PrivacyPageContent() {
  return (
    <main className="py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeading eyebrow="Privacidade" title="Política de Privacidade" description="Informações essenciais sobre uso dos dados e transparência para o cliente." />
        <div className="mt-10 space-y-6 rounded-[2rem] border border-white/10 bg-zinc-950/70 p-8 text-zinc-400">
          <p>Esta aplicação utiliza dados apenas para fins de apresentação e experiência do usuário, com foco em conversão e contato por WhatsApp.</p>
          <p>As informações fornecidas em formulários ou contatos podem ser utilizadas para responder pedidos e manter comunicação comercial.</p>
          <p>Em futuras versões, a integração com serviços como Supabase ou Firebase permitirá gestão mais avançada de dados, promoções e cardápios.</p>
        </div>
      </div>
    </main>
  )
}
