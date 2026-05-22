import type { SlideDefinition } from '../types/slides';

const nextSteps = [
  {
    week: 'Semana 1-2',
    phase: 'Due Diligence Acelerada',
    items: [
      'Revisión técnica: reservas, permisos, capacidad actual',
      'Due diligence financiera y legal',
      'NDA firmado y acceso a data room M&N',
      'Validación de CAPEX requerido y plan operativo'
    ]
  },
  {
    week: 'Semana 3-4',
    phase: 'Term Sheet & Mandato',
    items: [
      'Propuesta de términos detallada (estructura, warrants, governance)',
      'Firma de mandato Matwal como investment manager',
      'Definición de roles operativos y comités',
      'Banking setup y selección de custodios'
    ]
  },
  {
    week: 'Semana 5-8',
    phase: 'Estructuración SPV & Capital Raise',
    items: [
      'Constitución del SPV (BVI/Lux)',
      'Documentación legal (LPA, PPM, Subscription Docs)',
      'Capital raising con anchor LPs (target 30-40% first close)',
      'Preparación de primer desembolso CAPEX'
    ]
  }
];

export const Slide11CommunityPartnerships = {
  type: 'content',
  title: 'Próximos Pasos',
  subtitle: 'De reunión a ejecución en 8 semanas',
  content: (
    <div className="space-y-8 text-sm md:text-base text-slate-700">
      <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
        <div className="text-sm uppercase tracking-wide text-blue-800 font-semibold mb-2">La Ventana Se Está Cerrando</div>
        <p className="text-base text-slate-800 leading-relaxed">
          El DOD ya firmó contratos por &gt;US$1B y otros operadores están acelerando. <strong>Los que actúen primero</strong> se convertirán
          en proveedores ancla. Los que esperen quedarán fuera. Tenemos la capacidad de mover rápido - desde esta reunión hasta primer
          desembolso pueden ser <strong>8 semanas o menos</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {nextSteps.map((step) => (
          <div key={step.week} className="border border-slate-200 bg-white p-6">
            <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">{step.week}</div>
            <div className="text-lg font-semibold text-slate-900 mb-3">{step.phase}</div>
            <ul className="space-y-2 text-sm text-slate-700">
              {step.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 text-white p-6">
        <div className="text-sm uppercase tracking-wide text-slate-300 mb-3">Qué Necesitamos de M&amp;N Hoy</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <div className="font-semibold text-white mb-2">Para Avanzar a DD (esta semana):</div>
            <ul className="space-y-1 text-slate-300">
              <li>✓ Firma de NDA mutuo</li>
              <li>✓ Acceso a data room técnico/financiero</li>
              <li>✓ Reunión con equipo técnico de M&N</li>
              <li>✓ Plan CAPEX detallado y timeline operativo</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white mb-2">Para Term Sheet (semana 3-4):</div>
            <ul className="space-y-1 text-slate-300">
              <li>✓ Validación de reservas y permisos</li>
              <li>✓ Confirmación de interés en contratos DOD</li>
              <li>✓ Preferencias de estructura (debt/equity mix)</li>
              <li>✓ Decisión sobre gobernanza y reporting</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border border-green-200 bg-green-50 p-6">
        <div className="text-sm uppercase tracking-wide text-green-700 font-semibold mb-2">Call to Action</div>
        <p className="text-base text-slate-800 leading-relaxed mb-4">
          Estamos listos para mover. Matwal tiene el capital, MiraLabs tiene la infraestructura, y ustedes tienen la operación.
          <strong> Juntos podemos capturar esta oportunidad histórica.</strong>
        </p>
        <div className="text-base font-semibold text-green-900">
          ¿Están listos para avanzar a Due Diligence?
        </div>
      </div>
    </div>
  )
} satisfies SlideDefinition;
