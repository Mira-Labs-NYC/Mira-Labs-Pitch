import type { SlideDefinition } from '../types/slides';

export const Slide03StrategicRationale = {
  type: 'content',
  title: 'Qué Necesitan Para Escalar',
  subtitle: 'Entendemos sus desafíos - tenemos la solución',
  content: (
    <div className="space-y-8">
      <div className="bg-red-50 border-l-4 border-red-500 p-6">
        <div className="text-sm uppercase tracking-wide text-red-800 font-semibold mb-2">El Desafío que Enfrentan</div>
        <p className="text-base text-slate-800 leading-relaxed">
          M&amp;N tiene las reservas, permisos y expertise - pero <strong>necesita capital para escalar rápidamente</strong> y aprovechar
          la ventana del DOD. La banca tradicional es lenta, costosa y no entiende la oportunidad estratégica. Los compradores DOD exigen
          <strong> volúmenes consistentes, reporting institucional y gobernanza auditable</strong> - requisitos difíciles de cumplir sin un socio institucional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-orange-200 bg-orange-50 p-6">
          <div className="text-sm uppercase tracking-wide text-orange-800 font-semibold mb-3">Sin Capital Para Escalar</div>
          <ul className="space-y-2 text-sm text-slate-700">
            <li><strong>CAPEX incremental:</strong> Equipos de trituración, flotación, logística y energía</li>
            <li><strong>Working capital:</strong> 30-60 días para acelerar ciclos de producción</li>
            <li><strong>Banca tradicional:</strong> Lenta, cara, no entiende minerales críticos</li>
            <li><strong>Timing crítico:</strong> La ventana DOD no espera - necesitan actuar YA</li>
          </ul>
        </div>
        <div className="border border-orange-200 bg-orange-50 p-6">
          <div className="text-sm uppercase tracking-wide text-orange-800 font-semibold mb-3">Sin Infraestructura Institucional</div>
          <ul className="space-y-2 text-sm text-slate-700">
            <li><strong>Reporting:</strong> DOD exige auditorías, KPIs y trazabilidad institucional</li>
            <li><strong>Gobernanza:</strong> Contratos offtake requieren controles tipo Fortune 500</li>
            <li><strong>Acceso a compradores:</strong> Conexiones con programas DPA y Strategic Reserve</li>
            <li><strong>Escala internacional:</strong> Cumplir con estándares de compliance global</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-600 p-6">
        <div className="text-sm uppercase tracking-wide text-green-800 font-semibold mb-3">Nuestra Solución: 3 Pilares</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-700">
          <div>
            <div className="font-semibold text-green-900 mb-2">1. Capital Rápido y Flexible</div>
            <ul className="space-y-1">
              <li>• Financiamiento estructurado (debt + equity + warrants)</li>
              <li>• Desembolsos alineados a CAPEX y ciclos operativos</li>
              <li>• Sin burocracia bancaria tradicional</li>
              <li>• Términos diseñados para operadores mineros</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-green-900 mb-2">2. Infraestructura Institucional</div>
            <ul className="space-y-1">
              <li>• Reporting MiraLabs (dashboards, auditorías, KPIs)</li>
              <li>• Gobernanza Matwal (comités, compliance, escrows)</li>
              <li>• Control de flujos en tiempo real</li>
              <li>• Estándares que cumplen requisitos DOD</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-green-900 mb-2">3. Acceso a Compradores</div>
            <ul className="space-y-1">
              <li>• Conexiones con programas DPA y Strategic Reserve</li>
              <li>• Network de aliados (Australia, Canadá, LatAm)</li>
              <li>• Ayuda en contratos offtake institucionales</li>
              <li>• Pipeline para SPV II/III (más minerales críticos)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white p-6">
        <div className="text-sm uppercase tracking-wide text-slate-300 mb-2">El Resultado</div>
        <p className="text-base leading-relaxed">
          Con nuestra asociación, M&amp;N puede <strong>duplicar producción en 18-24 meses</strong>, cumplir con los estándares DOD,
          y convertirse en <strong>proveedor ancla de minerales críticos</strong> para programas de defensa de EE.UU. y aliados.
          Ustedes se enfocan en operar - nosotros proveemos capital, infraestructura y acceso a mercado.
        </p>
      </div>
    </div>
  )
} satisfies SlideDefinition;
