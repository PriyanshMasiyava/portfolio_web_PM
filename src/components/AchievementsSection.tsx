import { Trophy, Award, Users, Star } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { achievements } from '../data/achievements'

const iconMap: Record<string, LucideIcon> = {
  Trophy,
  Award,
  Users,
  Star,
}

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-navy-950 dark:bg-navy-950">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-2">
            Highlights
          </p>
          <h2 className="section-heading text-white dark:text-white">
            <span className="accent-text">Achievements</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map(a => {
            const Icon = iconMap[a.icon] ?? Trophy
            return (
              <div
                key={a.id}
                className="flex gap-5 p-6 bg-navy-800 border border-slate-700/50 rounded-xl
                           hover:border-violet-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-violet-500/15 border border-violet-500/30
                               flex items-center justify-center">
                  <Icon size={20} className="text-violet-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white dark:text-white text-base mb-1.5">
                    {a.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {a.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
