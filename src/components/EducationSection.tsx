import { MapPin, Calendar, GraduationCap } from 'lucide-react'
import { educationList } from '../data/education'

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-navy-900 dark:bg-navy-900">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-2">
            Academic Background
          </p>
          <h2 className="section-heading text-white dark:text-white">
            <span className="accent-text">Education</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-teal-400/50 via-teal-400/20 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {educationList.map(edu => (
              <div key={edu.id} className="relative sm:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-5 h-5 rounded-full bg-navy-900 border-2 border-teal-400
                               flex items-center justify-center hidden sm:flex -translate-x-1/2">
                  <div className="w-2 h-2 rounded-full bg-teal-400" />
                </div>

                {/* Card */}
                <div className="bg-navy-800 border border-slate-700/50 rounded-xl p-6
                               hover:border-teal-400/30 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-teal-400/10 border border-teal-400/30 flex items-center justify-center">
                        <GraduationCap size={18} className="text-teal-400" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white dark:text-white leading-snug">
                          {edu.degree}
                        </h3>
                        <p className="text-teal-400 text-sm font-medium mt-0.5">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'In Progress'
                        ? 'bg-violet-500/10 border border-violet-500/30 text-violet-300'
                        : 'bg-teal-400/10 border border-teal-400/30 text-teal-400'
                    }`}>
                      {edu.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mt-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {edu.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {edu.location}
                    </span>
                    {edu.cgpa && (
                      <span className="font-medium text-slate-300">
                        CGPA: <span className="text-teal-400">{edu.cgpa}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
