import type { SlideDefinition } from '../types/slides';

export const Slide02ExecutiveSummary = {
  type: 'content',
  title: 'La Oportunidad que Vemos',
  subtitle: 'El Departamento de Defensa está comprando minerales críticos - y ustedes están perfectamente posicionados',
  content: (
    <div className="space-y-8">
      <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
        <div className="text-sm uppercase tracking-wide text-amber-800 font-semibold mb-2">La Ventana Histórica</div>
        <p className="text-base text-slate-800 leading-relaxed">
          El Departamento de Defensa de EE.UU. está invirtiendo <strong>&gt;US$1.0B en 2025</strong> para asegurar el suministro de minerales críticos
          (antimonio, cobalto, tántalo, tungsteno, escandio, tierras raras). Esto no es un ciclo de commodity - es <strong>seguridad nacional</strong>.
          Los operadores con reservas, permisos y capacidad probada tienen una ventana de 24-36 meses para convertirse en proveedores ancla.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            value: 'US$245M',
            label: 'Antimonio',
            detail: 'Contrato DOD con US Antimony Corp. Municiones y sistemas críticos.'
          },
          {
            value: 'US$500M',
            label: 'Cobalto',
            detail: 'Stockpiling para aleaciones aeroespaciales y baterías militares.'
          },
          {
            value: 'US$100M',
            label: 'Tántalo',
            detail: 'Componentes electrónicos de defensa y capacitores.'
          }
        ].map((card) => (
          <div key={card.label} className="bg-blue-900 text-white p-6">
            <div className="text-2xl font-light mb-2">{card.value}</div>
            <div className="text-sm uppercase tracking-wide text-blue-200 mb-2">{card.label}</div>
            <div className="text-sm text-blue-100">{card.detail}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border border-slate-200 bg-white p-6">
          <div className="text-sm uppercase tracking-wide text-slate-600 font-semibold mb-3">Por Qué Esto Está Pasando</div>
          <ul className="space-y-2 text-sm text-slate-700">
            <li><strong>China controla 60-90%</strong> del suministro global de minerales críticos</li>
            <li><strong>Defense Production Act Title III:</strong> autoriza compras aceleradas para stockpiling</li>
            <li><strong>Strategic Materials Reserve:</strong> el Pentágono está construyendo reservas de guerra</li>
            <li><strong>Programas con aliados:</strong> Australia, Canadá, Arabia Saudita y LatAm reciben incentivos</li>
            <li><strong>F-35, misiles, municiones:</strong> toda la cadena militar depende de estos minerales</li>
          </ul>
        </div>
        <div className="border border-green-200 bg-green-50 p-6">
          <div className="text-sm uppercase tracking-wide text-green-700 font-semibold mb-3">Por Qué M&amp;N Está Posicionado</div>
          <ul className="space-y-2 text-sm text-slate-700">
            <li><strong>Reservas probadas</strong> en minerales críticos (antimonio, grafito, metales raros)</li>
            <li><strong>Permisos vigentes</strong> y operación activa - no es exploración</li>
            <li><strong>Jurisdicción friendly</strong> - fuera de la influencia China/Rusia</li>
            <li><strong>Costos competitivos</strong> vs. promedios regionales</li>
            <li><strong>Track record</strong> - 10+ años operando, equipo probado</li>
            <li><strong>Listo para escalar</strong> - solo necesita CAPEX para aumentar volumen</li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-900 text-white p-6">
        <div className="text-sm uppercase tracking-wide text-slate-300 mb-3">Lo Que Esto Significa Para Ustedes</div>
        <p className="text-base leading-relaxed">
          M&amp;N tiene <strong>todo lo que el DOD está buscando</strong>: reservas, permisos, operación probada y jurisdicción segura.
          Lo único que falta es <strong>capital para escalar rápidamente</strong>. Ahí entramos nosotros: financiamos la expansión,
          aportamos infraestructura institucional y conectamos M&amp;N con compradores estratégicos. <strong>Esta ventana no dura para siempre.</strong>
        </p>
      </div>

      <p className="text-xs uppercase tracking-wide text-slate-500">Fuentes: ReporteMinero.cl, Defense & Munitions, USGS 2025, Reuters, CSIS, NPR.</p>
    </div>
  )
} satisfies SlideDefinition;
