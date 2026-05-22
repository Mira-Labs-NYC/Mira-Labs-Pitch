import type { SlideDefinition } from '../types/slides';

const risks = [
  { risk: 'Operativo', mitigation: 'Auditoría de reservas, telemetría de maquinaria, KPIs diarios y soporte on-site de MiraLabs + supervisión Matwal.' },
  { risk: 'Mercado / precio', mitigation: 'Contratos forward con offtakers vinculados al DOD, cobertura selectiva y diversificación multimetal.' },
  { risk: 'Regulatorio / permisos', mitigation: 'Permisos vigentes verificados, clean legal opinion, SPV offshore compliant y asesoría local.' },
  { risk: 'Geopolítico', mitigation: 'Alineación explícita con agenda DOD y supply de aliados; múltiples compradores y respaldo de programas internacionales.' },
  { risk: 'Gestión & governance', mitigation: 'Comités con voto cruzado, reporting mensual, auditoría anual y sustitución inmediata si KPIs se desvían.' }
];

export const Slide08PlatformBusinessModel = {
  type: 'content',
  title: 'Riesgos y mitigantes',
  subtitle: 'Estructura alineada a estándares de defensa y banca institucional',
  content: (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {risks.map((item) => (
          <div key={item.risk} className="border border-slate-200 p-6 bg-white">
            <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">{item.risk}</div>
            <p className="text-sm text-slate-700">{item.mitigation}</p>
          </div>
        ))}
      </div>

      <div className="border border-blue-200 bg-blue-50 p-6">
        <div className="text-sm uppercase tracking-wide text-blue-700 font-semibold mb-2">Infraestructura de control</div>
        <ul className="space-y-2 text-slate-800 text-sm">
          <li>• Dashboards MiraLabs enlazados con sensores IoT y sistemas contables para mostrar producción, inventarios y cash en tiempo real.</li>
          <li>• Control account / escrow con doble firma y reconciliación automática.</li>
          <li>• Auditoría externa anual + revisiones trimestrales de KPIs críticos.</li>
        </ul>
      </div>
    </div>
  )
} satisfies SlideDefinition;
