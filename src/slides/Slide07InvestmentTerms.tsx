import type { SlideDefinition } from '../types/slides';

export const Slide07InvestmentTerms = {
  type: 'content',
  title: 'Estructura de inversión',
  subtitle: 'Términos propuestos para LPs ancla e institucionales',
  content: (
    <div className="space-y-8 text-sm md:text-base text-slate-700">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="border border-slate-200 p-6">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">Tamaño objetivo</div>
          <div className="text-3xl font-light text-slate-900 mb-2">US$40–60M</div>
          <p>Tramos escalonados para desplegar CAPEX en 24 meses. Anchor 30–40% asegura pricing y acceso a warrants.</p>
        </div>
        <div className="border border-slate-200 p-6">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">Clases de participación</div>
          <ul className="space-y-2">
            <li>• `Senior Notes` aseguradas (first lien sobre equipos e inventario).</li>
            <li>• `Mezzanine Units` con distribución mensual + participación variable.</li>
            <li>• `Equity Warrants` ligados a producción crítica y a SPV II/III.</li>
          </ul>
        </div>
        <div className="border border-slate-200 p-6">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">Economía del Manager</div>
          <ul className="space-y-2">
            <li>• Management fee 1.5% (solo sobre capital desplegado).</li>
            <li>• Carried interest 15-20% con hurdle 8% (según tramo).</li>
            <li>• Co-inversión Matwal/MiraLabs 5% mínimo.</li>
          </ul>
        </div>
      </div>

      <div className="border border-blue-200 bg-blue-50 p-6">
        <div className="text-sm uppercase tracking-wide text-blue-700 font-semibold mb-2">Derechos para anchors</div>
        <ul className="space-y-2 text-slate-800">
          <li>• Asiento en comité consultivo + veto limitado sobre grandes CAPEX.</li>
          <li>• Información extendida (data room + acceso API al dashboard MiraLabs).</li>
          <li>• Preferencia para follow-on en SPV II / III y coinversiones bilaterales.</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-slate-200 p-6">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">Documentación lista</div>
          <p>Term Sheet, mandato Matwal, outline de PPM/LPA, datos técnicos de M&amp;N (reserves, KPIs, validación legal) y resumen del modelo financiero.</p>
        </div>
        <div className="border border-slate-200 p-6">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">Próximos hitos</div>
          <ul className="space-y-1">
            <li>• DD legal/técnica (Semanas 1-2).</li>
            <li>• Constitución SPV + banking (Semanas 3-4).</li>
            <li>• Primer cierre capital + desembolso (Semanas 5-6 / 7-8).</li>
          </ul>
        </div>
      </div>
    </div>
  )
} satisfies SlideDefinition;
