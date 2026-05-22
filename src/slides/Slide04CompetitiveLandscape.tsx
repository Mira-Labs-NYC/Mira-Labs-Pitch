import type { SlideDefinition } from '../types/slides';

const minerals = [
  {
    name: 'Antimonio',
    use: 'Municiones, retardantes, baterías militares',
    dependency: '70%+ supply controlado por China',
    dod: 'Contrato US$245M (US Antimony Corp) y orden de compra continua'
  },
  {
    name: 'Cobalto',
    use: 'Aleaciones aeroespaciales, baterías de defensa',
    dependency: 'Congo + refino chino',
    dod: 'Contrato US$500M para stock nacional y alianzas EUA–Australia'
  },
  {
    name: 'Tántalo',
    use: 'Electrónica de precisión, sistemas EW',
    dependency: 'Procesamiento concentrado en China',
    dod: 'Compra acelerada US$100M + búsqueda de supply aliado'
  },
  {
    name: 'Tungsteno',
    use: 'Blindaje, perforación y municiones',
    dependency: '70% extracción China',
    dod: 'Programa Strategic Materials Reserve para reponer stock'
  },
  {
    name: 'Escandio',
    use: 'Aleaciones ligeras aeroespaciales',
    dependency: 'Producción limitada global',
    dod: 'Contratos piloto con productores estadounidenses y canadienses'
  },
  {
    name: 'Tierras Raras (REE)',
    use: 'F-35, radares, guiado y comunicaciones',
    dependency: 'Refino 85% en China',
    dod: 'DPA Title III financia separación y offtakes multi-país'
  },
  {
    name: 'Grafito natural',
    use: 'Ánodos de baterías y componentes electrónicos',
    dependency: 'China domina >80%',
    dod: 'Lista crítica USGS 2025; acuerdos con empresas aliadas'
  },
  {
    name: 'Metales raros (arsénico, bismuto, galio, germanio, indio, ytrio)',
    use: 'Óptica, chips RF, defensa contra interferencia',
    dependency: 'Supply concentrado en China/Rusia',
    dod: 'Nuevas compras vía International Security Supply Chain Initiative'
  }
];

export const Slide04CompetitiveLandscape = {
  type: 'content',
  title: 'Minerales críticos priorizados',
  subtitle: 'Qué busca el DOD y cómo se alinea el SPV',
  content: (
    <div className="space-y-8">
      <div className="border border-slate-200">
        <div className="bg-slate-900 text-white px-6 py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          <div>
            <h3 className="text-base uppercase tracking-wide font-semibold">Lista activa de compras DOD (2025)</h3>
            <p className="text-sm text-slate-300">Basado en ReporteMinero, Defense &amp; Munitions, Reuters, USGS</p>
          </div>
          <div className="text-xs text-right text-slate-400 uppercase tracking-widest">Security &amp; Defense Supply Chain</div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full text-sm md:text-base">
            <thead className="bg-slate-50 text-slate-600 uppercase tracking-wide text-xs">
              <tr>
                <th className="px-4 py-3 text-left">Mineral</th>
                <th className="px-4 py-3 text-left">Uso defensa</th>
                <th className="px-4 py-3 text-left">Dependencia actual</th>
                <th className="px-4 py-3 text-left">Acción DOD 2025</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {minerals.map((row) => (
                <tr key={row.name} className="bg-white">
                  <td className="px-4 py-3 font-semibold text-slate-900">{row.name}</td>
                  <td className="px-4 py-3 text-slate-700">{row.use}</td>
                  <td className="px-4 py-3 text-slate-600">{row.dependency}</td>
                  <td className="px-4 py-3 text-slate-600">{row.dod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm md:text-base text-slate-700">
        <div className="border border-blue-200 bg-blue-50 p-5">
          <div className="text-sm uppercase tracking-wide text-blue-700 font-semibold mb-2">Ventana geopolítica</div>
          <p>El DOD reconoce que la dependencia externa es el mayor riesgo de seguridad nacional → financia proveedores aliados con contratos multianuales.</p>
        </div>
        <div className="border border-slate-200 bg-white p-5">
          <div className="text-sm uppercase tracking-wide text-slate-600 font-semibold mb-2">Cómo encaja M&amp;N</div>
          <p>Reservas en antimonio y grafito, permisos vigentes y CAPEX moderado permiten subir producción en 6-12 meses.</p>
        </div>
        <div className="border border-slate-200 bg-white p-5">
          <div className="text-sm uppercase tracking-wide text-slate-600 font-semibold mb-2">Rol del SPV</div>
          <p>Financia CAPEX/OPEX, fija garantías y activa reporting MiraLabs para cumplir estándares de Defense Production Act / Strategic Reserve.</p>
        </div>
      </div>
    </div>
  )
} satisfies SlideDefinition;
