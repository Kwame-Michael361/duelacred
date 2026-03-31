'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            DuelaCred
          </div>
          <div className="hidden md:flex gap-8 text-slate-300">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#benefits" className="hover:text-white transition">Benefits</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 px-6 pb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Intelligent Credit Solutions
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Access smarter credit management with cutting-edge technology and transparent pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition text-lg">
              Start Your Journey
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition text-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Why Choose DuelaCred?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Fast Approval',
                desc: 'Get approved in minutes, not days. Our AI-powered system processes applications instantly.'
              },
              {
                title: 'Transparent Rates',
                desc: 'No hidden fees. Know exactly what you\'re paying with our straightforward pricing model.'
              },
              {
                title: 'Flexible Terms',
                desc: 'Customize your repayment schedule to match your financial situation perfectly.'
              },
              {
                title: 'Expert Support',
                desc: 'Our dedicated team is available 24/7 to answer your questions and guide you.'
              },
              {
                title: 'Secure Platform',
                desc: 'Bank-level security with encryption and compliance with all major standards.'
              },
              {
                title: 'Build Credit',
                desc: 'Every payment helps build your credit history and unlock better opportunities.'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-700/40 backdrop-blur border border-slate-600 p-8 rounded-xl hover:bg-slate-600/40 transition">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Your Path to Financial Freedom</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {[
                  'Instant Decision-Making Technology',
                  'Competitive Interest Rates',
                  'Monthly Financial Reports',
                  'Personalized Recommendations',
                  'Mobile App Access',
                  'Referral Rewards Program'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <p className="text-slate-200 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-cyan-400/30 rounded-2xl p-8">
              <p className="text-slate-300 mb-4">Join thousands of satisfied customers who've transformed their financial lives with DuelaCred.</p>
              <div className="space-y-4">
                <div>
                  <p className="text-cyan-400 text-2xl font-bold">50K+</p>
                  <p className="text-slate-400">Active Users</p>
                </div>
                <div>
                  <p className="text-cyan-400 text-2xl font-bold">$2B+</p>
                  <p className="text-slate-400">Credit Issued</p>
                </div>
                <div>
                  <p className="text-cyan-400 text-2xl font-bold">98%</p>
                  <p className="text-slate-400">Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Financial Future?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of users who've found financial freedom with DuelaCred
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-20 py-5 rounded-lg font-semibold hover:shadow-2xl transition text-lg">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-12 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-cyan-400 font-bold mb-4">DuelaCred</h3>
              <p className="text-slate-400">Making credit accessible to everyone.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-cyan-400">Features</a></li>
                <li><a href="#" className="hover:text-cyan-400">Pricing</a></li>
                <li><a href="#" className="hover:text-cyan-400">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-cyan-400">About</a></li>
                <li><a href="#" className="hover:text-cyan-400">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-cyan-400">Privacy</a></li>
                <li><a href="#" className="hover:text-cyan-400">Terms</a></li>
                <li><a href="#" className="hover:text-cyan-400">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>&copy; 2026 DuelaCred. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
