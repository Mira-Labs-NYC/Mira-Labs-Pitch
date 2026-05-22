import type { SlideDefinition } from '../types/slides';

export const Slide06FinancialModel = {
  type: 'content',
  title: 'Modelo financiero resumido',
  subtitle: 'Ingresos, costos y retornos objetivo para LPs',
  content: (
    <div className="space-y-8 text-sm md:text-base text-slate-700">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="border border-slate-200 p-6">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Ingresos</div>
          <ul className="space-y-2">
            <li>• Producción actual (baseline) + incremento 1.8x con CAPEX financiado.</li>
            <li>• Precios spot ponderados por offtakes vinculados al DOD / aliados.</li>
            <li>• Diversificación en antimonio, grafito y subproductos metálicos.</li>
          </ul>
        </div>
        <div className="border border-slate-200 p-6">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Costos</div>
          <ul className="space-y-2">
            <li>• Extracción, procesamiento, transporte y energía.</li>
            <li>• Mano de obra especializada y mantenimiento.</li>
            <li>• Depreciación del CAPEX y gastos de compliance/auditoría.</li>
          </ul>
        </div>
        <div className="border border-slate-200 p-6">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Retornos a inversionistas</div>
          <ul className="space-y-2">
            <li>• Tramo Senior: 14–18% net IRR, pagos mensuales o trimestrales.</li>
            <li>• Tramo Mezzanine/Equity: 22–32% net IRR + cash yield variable.</li>
            <li>• Warrants ligados a ton/mes críticos y lanzamiento SPV II.</li>
          </ul>
        </div>
      </div>

      <div className="border border-blue-200 bg-blue-50 p-6">
        <div className="text-sm uppercase tracking-wide text-blue-700 font-semibold mb-2">Waterfall institucional</div>
        <ul className="space-y-2 text-slate-800">
          <li>1. Capital call por tramo con pref 8% para Senior.</li>
          <li>2. Retorno de capital + pref, luego catch-up para Matwal/MiraLabs (carry 15-20%).</li>
          <li>3. Exceso distribuido pro-rata según participación y warrants activados.</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-slate-200 p-6">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Sensibilidades monitoreadas</div>
          <ul className="space-y-2">
            <li>• Precio antimonio/tántalo/tungsteno (escenarios conservador/base/alto).</li>
            <li>• Dilución de márgenes vs variaciones en energía y reactivos.</li>
            <li>• Velocidad de instalación CAPEX y ramp-up de throughput.</li>
          </ul>
        </div>
        <div className="border border-slate-200 p-6">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Reporting</div>
          <p className="text-sm">MiraLabs provee dashboards mensuales con producción, cash flow, cobertura de precios y variaciones de CAPEX; se comparte paquete completo con LPs y offtakers estratégicos.</p>
        </div>
      </div>
    </div>
  )
} satisfies SlideDefinition;
