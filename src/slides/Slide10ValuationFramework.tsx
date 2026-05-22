import type { SlideDefinition } from '../types/slides';

const roadmap = [
  { phase: 'Semanas 1–2', items: ['Due diligence legal, técnica y financiera', 'Term Sheet final + mandato Matwal', 'Validación de reservas y offtakes preliminares'] },
  { phase: 'Semanas 3–4', items: ['Constitución SPV (BVI o Lux) y set-up bancario/escrow', 'Documentación PPM, LPA y Subscription Docs', 'Activar data room e invitar anchors'] },
  { phase: 'Semanas 5–6', items: ['Capital raising (anchor 30–40%)', 'Primer cierre + onboarding de LPs institucionales', 'Preparación de órdenes de compra CAPEX/OPEX'] },
  { phase: 'Semanas 7–8', items: ['Desembolso inicial controlado', 'Inicio CAPEX crítico y working capital', 'Reporting inicial vía MiraLabs + comité operativo'] }
];

export const Slide10ValuationFramework = {
  type: 'content',
  title: 'Roadmap de ejecución (8 semanas)',
  subtitle: 'Secuencia para activar contratos DOD y despliegue de capital',
  content: (
    <div className="space-y-8 text-sm md:text-base text-slate-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {roadmap.map((block) => (
          <div key={block.phase} className="border border-slate-200 p-6">
            <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">{block.phase}</div>
            <ul className="space-y-2">
              {block.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border border-blue-200 bg-blue-50 p-6">
        <div className="text-sm uppercase tracking-wide text-blue-700 font-semibold mb-2">Hitos adicionales</div>
        <ul className="space-y-2 text-slate-800">
          <li>• Extendemos la misma infraestructura para SPV II y III (otros minerales críticos, joint ventures o upstream deals).</li>
          <li>• Posicionamiento para acceder a créditos blandos de aliados (US International Development Finance Corporation, Export Finance Australia, etc.).</li>
          <li>• Preparación de paquete institucional listo para PPT / Canva / data room según template MiraLabs.</li>
        </ul>
      </div>
    </div>
  )
} satisfies SlideDefinition;
