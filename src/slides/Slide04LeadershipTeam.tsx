import type { SlideDefinition } from '../types/slides';

const roles = [
  {
    name: 'Matwal LTD',
    title: 'Investment Manager institucional',
    bullets: [
      'Plataforma multi-estrategia con presencia Londres / Nueva York / Singapur',
      'Gobernanza, compliance y relación con LPs institucionales',
      'Experiencia estructurando SPVs en BVI / Lux y ejecutando comités de riesgo'
    ]
  },
  {
    name: 'MiraLabs',
    title: 'Tecnología, treasury & risk engine',
    bullets: [
      'Control de flujos vía control accounts / escrow, dashboards diarios y alertas de KPIs operativos',
      'Automatización de reporting mensual y auditoría externa anual',
      'Infraestructura opcional de tokenización para LPs digitales y seguimiento de offtakers'
    ]
  },
  {
    name: 'M&N Minería',
    title: 'Operating Partner (minerales críticos)',
    bullets: [
      '10+ años operando antimonio, grafito y metales asociados',
      'Reservas en jurisdicciones pro-aliados con permisos vigentes y equipos instalados',
      'Pipeline de expansión inmediata basada en CAPEX incremental y offtakes ya discutidos'
    ]
  }
];

export const Slide04LeadershipTeam = {
  type: 'content',
  title: 'Equipo y governance',
  subtitle: 'Roles claros para cumplir requisitos institucionales de defensa',
  content: (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {roles.map((role) => (
          <div key={role.name} className="border border-slate-200 bg-white p-6">
            <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">{role.title}</div>
            <div className="text-2xl font-light text-slate-900 mb-4">{role.name}</div>
            <ul className="space-y-3 text-sm text-slate-700">
              {role.bullets.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border border-slate-200 p-6">
        <div className="text-sm uppercase tracking-wide text-slate-600 font-semibold mb-3">Comités y controles</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
          <div>
            <div className="font-semibold text-slate-900 mb-1">Comité Operativo</div>
            <p>Seguimiento diario a producción, CAPEX y KPIs de planta; reportado en dashboard MiraLabs.</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-1">Comité Financiero</div>
            <p>Asignaciones por tramo, control de cuentas escrow y liberación contra hitos.</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-1">Comité de Riesgo</div>
            <p>Monitor geopolítico, cobertura de precios y actualización de offtakes; incluye asesor externo.</p>
          </div>
        </div>
      </div>
    </div>
  )
} satisfies SlideDefinition;
