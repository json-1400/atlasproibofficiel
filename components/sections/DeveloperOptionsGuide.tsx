import React from "react";
import { Terminal, Tv, Flame, Sparkles, CheckCircle2 } from "lucide-react";

export function DeveloperOptionsGuide(): React.JSX.Element {
  return (
    <section
      aria-label="Guide des sources inconnues et options développeur"
      className="rounded-2xl border border-border bg-white p-6 sm:p-8 space-y-6 shadow-sm"
    >
      <div className="space-y-2">
        <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
          <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
          Prérequis Système Indispensable
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-heading">
          Comment autoriser les sources inconnues sur Fire TV Stick & Android TV
        </h2>
        <p className="text-xs sm:text-sm text-body leading-relaxed max-w-3xl">
          Par sécurité d&apos;usine, les systèmes Fire OS et Android TV bloquent l&apos;installation directe de fichiers en dehors de leur boutique. Pour permettre à l&apos;application <strong>Downloader by AFTVnews</strong> d&apos;installer votre APK Atlas Pro, vous devez activer cette autorisation en 30 secondes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Amazon Fire TV Stick Card */}
        <div className="rounded-xl border border-border bg-surface/60 p-5 space-y-3.5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
              <Flame className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-heading">Sur Amazon Fire TV Stick (Fire OS)</h3>
              <p className="text-[11px] text-slate-500">Fire TV 4K, 4K Max, Lite et Cube</p>
            </div>
          </div>

          <ol className="space-y-2.5 text-xs text-body leading-relaxed list-decimal list-inside pl-1">
            <li>
              Allez dans les <strong>Paramètres</strong> (icône engrenage) depuis l&apos;accueil.
            </li>
            <li>
              Sélectionnez <strong>Ma Fire TV</strong>, puis <strong>Options pour les développeurs</strong>.
            </li>
            <li>
              Cliquez sur <strong>Installer applis inconnues</strong> (ou <em>Applications de sources inconnues</em>).
            </li>
            <li>
              Trouvez l&apos;icône orange <strong>Downloader</strong> et passez-la sur <strong>Activé</strong>.
            </li>
          </ol>

          <div className="rounded-lg bg-amber-50/80 border border-amber-200/80 p-3 text-[11px] text-amber-950 flex items-start gap-2">
            <Sparkles className="h-3.5 w-3.5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong className="font-semibold text-amber-900">Le menu Développeur est masqué ?</strong>
              <p className="mt-0.5 text-amber-800">
                Allez dans <em>Ma Fire TV &gt; À propos de</em>, puis cliquez <strong>7 fois d&apos;affilée</strong> sur le nom de votre Fire TV. Un message confirmera : <em>« Inutile, vous êtes déjà développeur »</em>.
              </p>
            </div>
          </div>
        </div>

        {/* Android TV & Google TV Card */}
        <div className="rounded-xl border border-border bg-surface/60 p-5 space-y-3.5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Tv className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-heading">Sur Android TV & Google TV</h3>
              <p className="text-[11px] text-slate-500">Xiaomi Mi Box, Nvidia Shield, Chromecast, Sony, TCL</p>
            </div>
          </div>

          <ol className="space-y-2.5 text-xs text-body leading-relaxed list-decimal list-inside pl-1">
            <li>
              Ouvrez les <strong>Paramètres</strong> de votre téléviseur ou boîtier.
            </li>
            <li>
              Naviguez dans <strong>Applications</strong> &gt; <strong>Accès spécifique des applications</strong> (ou <em>Sécurité et restrictions</em>).
            </li>
            <li>
              Sélectionnez la ligne <strong>Installer des applications inconnues</strong>.
            </li>
            <li>
              Basculez le bouton en face de <strong>Downloader</strong> sur la position <strong>Autorisé</strong>.
            </li>
          </ol>

          <div className="rounded-lg bg-emerald-50/80 border border-emerald-200/80 p-3 text-[11px] text-emerald-950 flex items-start gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong className="font-semibold text-emerald-900">Installation sécurisée et garantie</strong>
              <p className="mt-0.5 text-emerald-800">
                L&apos;autorisation est définitive et n&apos;aura pas besoin d&apos;être répétée lors des futures mises à jour d&apos;Atlas Pro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
