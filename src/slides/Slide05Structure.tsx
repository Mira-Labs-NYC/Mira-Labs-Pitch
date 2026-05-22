import type { SlideDefinition } from '../types/slides';

const categories = [
  {
    title: 'CAPEX',
    color: 'border-blue-500',
    items: [
      'Adquisición / upgrade de maquinaria (trituración, molienda, flotación)',
      'Equipos de seguridad, ventilación y monitoreo ambiental',
      'Optimización energética: microgrid, híbridos, paneles y almacenamiento'
    ]
  },
  {
    title: 'OPEX',
    color: 'border-emerald-500',
    items: [
      'Nómina técnica, geólogos, mantenimiento preventivo',
      'Energía, diésel, químicos y consumibles críticos',
      'Logística, transporte, seguros y permisos regulatorios'
    ]
  },
  {
    title: 'Working Capital',
    color: 'border-amber-500',
    items: [
      'Ciclos de 30–60 días para acelerar inventarios y procesamiento',
      'Anticipos ligados a contratos de venta / offtakes',
      'Reserva táctica para cobertura de precios y hedging'
    ]
  }
];

export const Slide05Structure = {
  type: 'content',
  title: 'Uso de fondos',
  subtitle: 'Despliegue disciplinado enfocado en throughput y contratos DOD',
  content: (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.title} className={`border-l-4 ${category.color} bg-white border border-slate-200 p-6`}>
            <div className="text-sm uppercase tracking-wide text-slate-500 mb-3">{category.title}</div>
            <ul className="space-y-3 text-sm text-slate-700">
              {category.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-slate-200 p-6">
        <div>
          <div className="text-sm uppercase tracking-wide text-slate-600 font-semibold mb-2">Asignación estimada</div>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• 45% CAPEX (maquinaria + upgrades)</li>
            <li>• 30% Working capital (inventarios, anticipos de offtake)</li>
            <li>• 20% OPEX crítico (energía, personal, logística)</li>
            <li>• 5% Reservas y fees (auditoría, seguridad, seguros)</li>
          </ul>
        </div>
        <div>
          <div className="text-sm uppercase tracking-wide text-slate-600 font-semibold mb-2">Liberación por hitos</div>
          <p className="text-sm text-slate-700">
            Cada desembolso requiere evidencia de progreso (proveedores, fotos, sensores en línea) y aprobación conjunta Matwal/MiraLabs.
            Los KPIs se integran al dashboard para mostrar tiempo real de toneladas procesadas, disponibilidad de equipos y nivel de inventario.
          </p>
        </div>
      </div>
    </div>
  )
} satisfies SlideDefinition;
