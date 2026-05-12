import React from 'react'
import data from '../../data/content.json'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#080a16] pt-28 pb-20 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6">
            <span className="text-gradient-animated bg-gradient-to-r from-indigo-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h1>
          <p className="text-base text-indigo-100/60 max-w-3xl mx-auto leading-relaxed font-medium">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'm always open to connecting with fellow innovators, potential collaborators, and organizations looking for privacy-focused AI solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card-glass p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 via-purple-500 to-rose-500 rounded-2xl flex items-center justify-center shrink-0 shadow-sm shadow-indigo-500/15">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-100">Direct Inquiries</h2>
                  <p className="text-xs text-indigo-200/50 font-medium">Multiple ways to reach me</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <a 
                  href={`mailto:${data.email}`}
                  className="flex items-center gap-4 p-5 bg-indigo-950/20 rounded-2xl border border-indigo-500/10 hover:border-indigo-500/30 hover:bg-indigo-950/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-102 transition-transform shadow-sm shadow-indigo-500/5">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-indigo-200/50 font-bold uppercase tracking-wider">Email</div>
                    <div className="text-slate-200 font-semibold text-base group-hover:text-indigo-300 transition-colors">{data.email}</div>
                  </div>
                </a>

                <a 
                  href={data.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-5 bg-indigo-950/20 rounded-2xl border border-indigo-500/10 hover:border-indigo-500/30 hover:bg-indigo-950/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-102 transition-transform shadow-sm shadow-purple-500/5">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-indigo-200/50 font-bold uppercase tracking-wider">LinkedIn</div>
                    <div className="text-slate-200 font-semibold text-base group-hover:text-purple-300 transition-colors">Professional Network</div>
                  </div>
                </a>

                <a 
                  href={data.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-5 bg-indigo-950/20 rounded-2xl border border-indigo-500/10 hover:border-indigo-500/30 hover:bg-indigo-950/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-102 transition-transform shadow-sm shadow-rose-500/5">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-indigo-200/50 font-bold uppercase tracking-wider">GitHub</div>
                    <div className="text-slate-200 font-semibold text-base group-hover:text-rose-300 transition-colors">Code & Repositories</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-emerald-950/10 backdrop-blur-md rounded-3xl p-8 border border-emerald-500/15">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-sm shadow-emerald-500/10">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-emerald-300/60 font-bold uppercase tracking-wider">Based in</div>
                  <div className="text-slate-100 font-bold text-lg">{data.contact.location}</div>
                </div>
              </div>
              <p className="text-xs font-semibold text-emerald-200/50 leading-relaxed">
                Open to remote collaboration and on-site opportunities in the region. 
                Available for travel and flexible working arrangements.
              </p>
            </div>
          </div>

          {/* CV Download & Additional Info */}
          <div className="space-y-8">
            {/* Download CV */}
            <div className="bg-indigo-950/15 backdrop-blur-md rounded-3xl p-8 border border-indigo-500/15">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 via-purple-500 to-rose-500 rounded-2xl flex items-center justify-center shrink-0 shadow-sm shadow-indigo-500/15">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100">Download Curriculum</h3>
                  <p className="text-xs text-indigo-200/50 font-medium">Complete professional overview</p>
                </div>
              </div>
              <p className="text-xs text-indigo-200/60 leading-relaxed mb-8 font-medium">
                Get a comprehensive overview of my experience in privacy engineering, AI development, 
                cybersecurity, and fintech innovations. Includes detailed project descriptions, 
                technical skills, and professional achievements.
              </p>
              <a 
                href="/Soham_CV.pdf"
                download="Soham_Penshanwar_CV.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-full font-bold text-xs text-white hover:scale-102 transition-all duration-300 shadow-sm shadow-indigo-500/10"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Get Curriculum PDF
              </a>
            </div>

            {/* Availability Status */}
            <div className="card-glass p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2.5 h-2.5 bg-[#10b981] rounded-full animate-pulse-glow shrink-0"></div>
                <h3 className="text-base font-bold text-slate-100">Current Availability</h3>
              </div>
              <div className="space-y-3 font-semibold text-xs text-indigo-200/80">
                <div className="flex items-center justify-between p-4 bg-indigo-950/20 border border-indigo-950/40 rounded-2xl">
                  <span>Full-time Roles</span>
                  <span className="text-[#10b981] font-bold">Open</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-indigo-950/20 border border-indigo-950/40 rounded-2xl">
                  <span>Consulting / Advisory</span>
                  <span className="text-[#10b981] font-bold">Available</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-indigo-950/20 border border-indigo-950/40 rounded-2xl">
                  <span>Research Collaborations</span>
                  <span className="text-[#10b981] font-bold">Always Interested</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center card-glass p-12 bg-slate-950/40 border border-indigo-950/40">
          <h2 className="text-2xl font-bold text-slate-100 mb-3 font-display">Ready to Start a Conversation?</h2>
          <p className="text-sm text-indigo-100/60 mb-8 max-w-xl mx-auto font-medium leading-relaxed">
            Whether you're looking to discuss a potential collaboration, explore innovative solutions, 
            or simply connect with a fellow tech enthusiast, I'd love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href={`mailto:${data.email}`}
              className="px-6 py-3.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-full font-bold text-xs text-white hover:scale-102 transition-all duration-300 shadow-sm shadow-indigo-500/10"
            >
              Send Email
            </a>
            <a 
              href={data.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 bg-indigo-950/40 border border-indigo-950/60 rounded-full text-indigo-200 font-bold text-xs hover:bg-indigo-900/40 hover:scale-102 transition-all"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

