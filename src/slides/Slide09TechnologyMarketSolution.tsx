import type { SlideDefinition } from '../types/slides';

export const Slide09TechnologyMarketSolution = {
  type: 'content',
  title: 'Ventajas competitivas del fondo',
  subtitle: 'Diferenciadores frente a fondos mineros tradicionales',
  content: (
    <div className="space-y-8 text-sm md:text-base text-slate-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border border-slate-200 p-6">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Alineación estratégica</div>
          <p>Mandato directo a seguridad nacional de EE.UU. (Defense Production Act, Strategic Materials Reserve, USGS Critical Minerals). Pocos fondos ofrecen exposición tan directa al gasto defensa.</p>
        </div>
        <div className="border border-slate-200 p-6">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Transparencia operativa</div>
          <p>MiraLabs Treasury &amp; Quant Engine monitorea flujos, inventarios y contratos en tiempo real, entregando trazabilidad tipo Anduril/Palantir.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          'Gobernanza institucional Matwal + auditoría externa = confianza inmediata para LPs soberanos y fondos de defensa.',
          'Estructura fiscal eficiente (BVI / Lux) con capacidad de emitir notas tokenizadas si LPs digitales lo requieren.',
          'Pipeline repetible: mismo stack se replica en SPV II / III (otros minerales críticos o joint ventures con aliados).'
        ].map((text) => (
          <div key={text} className="border border-slate-200 p-6 bg-white">
            <p>{text}</p>
          </div>
        ))}
      </div>

      <div className="border border-slate-200 p-6 bg-slate-900 text-white">
        <div className="text-sm uppercase tracking-wide text-slate-400 mb-2">Resultado esperado</div>
        <p className="text-base">
          Un vehículo posicionando a inversionistas en el corazón de la política industrial estadounidense, con retornos de doble dígito y protección mediante garantías reales, contratos off-take y cobertura tecnológica.
        </p>
      </div>
    </div>
  )
} satisfies SlideDefinition;
