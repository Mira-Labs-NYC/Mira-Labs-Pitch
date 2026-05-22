import type { SlideDefinition } from '../types/slides';

export const Slide05InstitutionalInfrastructure = {
  type: 'content',
  title: 'Estructura del vehículo',
  subtitle: 'SPV institucional con gobernanza y banking global',
  content: (
    <div className="space-y-8 text-sm md:text-base">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border border-slate-200 p-6">
          <div className="text-sm uppercase tracking-wide text-slate-600 font-semibold mb-2">Forma legal sugerida</div>
          <ul className="space-y-2 text-slate-700">
            <li>• BVI SPV ágil con documentación estándar (PPM, LPA, Subscription Docs).</li>
            <li>• Alternativa Lux RAIF compartment (depositary BNY/Pershing, pasaporte AIFMD).</li>
            <li>• Control accounts / escrow multi-moneda para flujos operativos.</li>
          </ul>
        </div>
        <div className="border border-blue-200 bg-blue-50 p-6">
          <div className="text-sm uppercase tracking-wide text-blue-700 font-semibold mb-2">Componentes clave</div>
          <div className="grid grid-cols-2 gap-4 text-slate-800">
            <div>
              <div className="font-semibold text-slate-900 mb-1">Manager</div>
              <p>Matwal LTD (Investment Manager) + MiraLabs (subadvisor tech &amp; treasury).</p>
            </div>
            <div>
              <div className="font-semibold text-slate-900 mb-1">Operador</div>
              <p>M&amp;N Minería con contratos de suministro críticos.</p>
            </div>
            <div>
              <div className="font-semibold text-slate-900 mb-1">Custodia</div>
              <p>BNY Mellon / Pershing / Anchorage u opciones digitales para LPs tokenizados.</p>
            </div>
            <div>
              <div className="font-semibold text-slate-900 mb-1">Auditoría</div>
              <p>Firma externa Big-4 / boutique minera, revisión anual.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Tramo Senior (Secured Debt)',
            items: ['Duración 24–48 meses', 'Garantías: maquinaria, inventario, cuentas de cobranza', 'Target 14–18% net IRR, pagos mensuales/trimestrales']
          },
          {
            title: 'Tramo Mezzanine / Equity',
            items: ['Participación sobre UMS y revenue share', 'Target 22–32% net IRR + cash yield variable', 'Warrants ligados a volumen crítico / expansión SPV II']
          },
          {
            title: 'Control de flujos',
            items: ['Escrow multisig administrado por Matwal + MiraLabs', 'Liberación contra hitos de CAPEX/OPEX', 'KPIs diarios integrados al dashboard']
          }
        ].map((section) => (
          <div key={section.title} className="border border-slate-200 p-6">
            <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">{section.title}</div>
            <ul className="space-y-2 text-slate-700">
              {section.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border border-slate-200 p-6">
        <div className="text-sm uppercase tracking-wide text-slate-600 font-semibold mb-3">Compliance &amp; governance</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700">
          <div>
            <div className="font-semibold text-slate-900 mb-1">Documentación</div>
            <p>PPM completo, LPA/Shareholders Agreement, Subscription Docs, side letters para anchors, legal opinions (local y SPV).</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-1">Monitoreo</div>
            <p>MiraLabs emite reporting mensual con métricas de producción, CAPEX ejecutado, cobertura de precios y cumplimiento ESG.</p>
          </div>
        </div>
      </div>
    </div>
  )
} satisfies SlideDefinition;
