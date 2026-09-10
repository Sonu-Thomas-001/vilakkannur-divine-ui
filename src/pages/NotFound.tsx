import { Link } from "react-router-dom";
import { Compass, Clock, MapPin, Sparkles, Home, ArrowLeft } from "lucide-react";
import { SEO } from "../components/SEO";

export default function NotFound() {
  return (
    <div className="w-full bg-deep-black text-warm-100 min-h-[80vh] flex items-center justify-center py-24 px-6">
      <SEO
        title="Page Not Found (404) | Vilakkannur Church"
        description="The page you were looking for could not be found. Explore official Vilakkannur Church Holy Mass timings, the Eucharistic Miracle, or directions."
        canonicalPath="/404"
        noindex={true}
      />

      <div className="max-w-xl text-center space-y-8">
        <div className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mx-auto">
          <Compass className="w-8 h-8 animate-pulse" />
        </div>

        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-mono">404 Error • Page Not Found</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
            Pilgrim Journey Waypoint
          </h1>
          <p className="text-warm-200/80 text-base leading-relaxed">
            The link you followed may have moved, expired, or been updated as part of our website reorganization. Please choose one of our primary sections below:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          <Link
            to="/mass-timings"
            className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold-500/40 hover:bg-white/10 transition-all group"
          >
            <Clock className="w-5 h-5 text-gold-400 shrink-0" />
            <div>
              <p className="text-sm font-medium text-white group-hover:text-gold-300">Mass Timings</p>
              <p className="text-xs text-warm-200/60">Daily & Sunday schedules</p>
            </div>
          </Link>

          <Link
            to="/eucharistic-miracle"
            className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold-500/40 hover:bg-white/10 transition-all group"
          >
            <Sparkles className="w-5 h-5 text-gold-400 shrink-0" />
            <div>
              <p className="text-sm font-medium text-white group-hover:text-gold-300">Eucharistic Miracle</p>
              <p className="text-xs text-warm-200/60">Story & scientific dossier</p>
            </div>
          </Link>

          <Link
            to="/how-to-reach"
            className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold-500/40 hover:bg-white/10 transition-all group"
          >
            <MapPin className="w-5 h-5 text-gold-400 shrink-0" />
            <div>
              <p className="text-sm font-medium text-white group-hover:text-gold-300">How to Reach</p>
              <p className="text-xs text-warm-200/60">Train, airport & bus routes</p>
            </div>
          </Link>

          <Link
            to="/nearby-stays"
            className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold-500/40 hover:bg-white/10 transition-all group"
          >
            <Home className="w-5 h-5 text-gold-400 shrink-0" />
            <div>
              <p className="text-sm font-medium text-white group-hover:text-gold-300">Nearby Stays</p>
              <p className="text-xs text-warm-200/60">Resorts & pilgrim lodging</p>
            </div>
          </Link>
        </div>

        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-500 text-deep-black font-medium text-sm hover:bg-gold-400 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
