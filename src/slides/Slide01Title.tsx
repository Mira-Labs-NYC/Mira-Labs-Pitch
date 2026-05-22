import type { SlideDefinition } from '../types/slides';

export const Slide01Title = {
  type: 'title',
  content: (
    <div className="h-full flex flex-col justify-between bg-slate-950 text-white p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
        <div>
          <div className="text-xs sm:text-sm font-light tracking-widest text-slate-400 mb-2">CONFIDENCIAL</div>
          <div className="text-xs text-slate-500">Propuesta de Asociación Estratégica</div>
        </div>
        <div className="text-left sm:text-right">
          <div className="text-xs text-slate-400">Diciembre 2025</div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Para M&amp;N Minería</div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="border-l-4 border-blue-500 pl-4 sm:pl-6 md:pl-8 mb-8">
          <div className="text-xs text-blue-200 tracking-[0.4em] uppercase mb-2">Matwal LTD × MiraLabs</div>
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-3 tracking-tight">
            Asociación Estratégica
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-slate-300 mb-2">
            Capital institucional + infraestructura para escalar su producción de minerales críticos
          </div>
          <div className="text-xs sm:text-sm text-slate-400 mt-4">
            Financiamiento Estructurado | Gobernanza Institucional | Acceso a Compradores DOD
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
        <div className="text-xs text-slate-500">
          <div>Matwal: London • New York • Singapore</div>
          <div className="text-blue-300">MiraLabs: Treasury & Tech Infrastructure</div>
        </div>
        <div className="text-xs text-slate-500 text-left sm:text-right">
          <div>Presentación preparada para:</div>
          <div className="text-blue-300 font-semibold">M&amp;N Minería - Equipo Directivo</div>
        </div>
      </div>
    </div>
  )
} satisfies SlideDefinition;
