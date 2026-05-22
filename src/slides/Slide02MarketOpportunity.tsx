import type { SlideDefinition } from '../types/slides';

export const Slide02MarketOpportunity = {
  type: 'content',
  title: 'Quiénes Somos',
  subtitle: 'Matwal + MiraLabs: socio institucional con infraestructura global',
  content: (
    <div className="space-y-8 text-base text-slate-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border-l-4 border-blue-600 bg-blue-50 p-6">
          <div className="text-lg font-semibold text-blue-900 mb-3">Matwal LTD</div>
          <div className="text-sm uppercase tracking-wide text-blue-700 mb-3">Investment Manager Institucional</div>
          <ul className="space-y-2 text-sm text-slate-700">
            <li><strong>Presencia global:</strong> Londres, Nueva York, Singapur</li>
            <li><strong>Experiencia:</strong> Multi-estrategia en commodities, infraestructura y activos reales</li>
            <li><strong>Ecosistema:</strong> US$5B+ en capital de partners institucionales</li>
            <li><strong>Track record:</strong> SPVs estructurados en minería, energía y logística</li>
            <li><strong>Expertise:</strong> Compliance internacional, gobernanza institucional, capital raising</li>
          </ul>
        </div>

        <div className="border-l-4 border-green-600 bg-green-50 p-6">
          <div className="text-lg font-semibold text-green-900 mb-3">MiraLabs</div>
          <div className="text-sm uppercase tracking-wide text-green-700 mb-3">Tecnología & Infraestructura Operativa</div>
          <ul className="space-y-2 text-sm text-slate-700">
            <li><strong>Plataforma:</strong> Treasury automation, control de flujos en tiempo real</li>
            <li><strong>Dashboards:</strong> KPIs operativos, financieros y reporting para auditorías</li>
            <li><strong>Tokenización:</strong> Infraestructura para LPs digitales (opcional)</li>
            <li><strong>Integración:</strong> Conexión con bancos, custodios y sistemas legacy</li>
            <li><strong>Experiencia:</strong> Plataformas para fondos tipo BlackRock/KKR</li>
          </ul>
        </div>
      </div>

      <div className="border border-slate-300 bg-white p-6">
        <div className="text-sm uppercase tracking-wide text-slate-600 font-semibold mb-3">Por Qué Nosotros Como Socio</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="font-semibold text-blue-900 mb-2">Capital Institucional</div>
            <p className="text-slate-600">
              Acceso directo a LPs institucionales (family offices, endowments, fondos soberanos) que buscan exposición a minerales críticos.
            </p>
          </div>
          <div>
            <div className="font-semibold text-blue-900 mb-2">Infraestructura Profesional</div>
            <p className="text-slate-600">
              Reporting automatizado, auditorías externas, control de cuentas y gobernanza que cumple con estándares internacionales.
            </p>
          </div>
          <div>
            <div className="font-semibold text-blue-900 mb-2">Red de Compradores</div>
            <p className="text-slate-600">
              Conexiones con programas del DOD, aliados estratégicos (Australia, Canadá) y contratos offtake institucionales.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white p-6">
        <div className="text-sm uppercase tracking-wide text-slate-300 mb-2">Nuestra propuesta de valor para M&amp;N</div>
        <p className="text-base leading-relaxed">
          No somos un fondo minero tradicional. Somos un <strong>socio estratégico</strong> que aporta capital institucional,
          infraestructura tecnológica y acceso a compradores críticos, permitiendo que M&amp;N se enfoque en lo que mejor hace:
          <strong> operar y escalar producción</strong>.
        </p>
      </div>
    </div>
  )
} satisfies SlideDefinition;
