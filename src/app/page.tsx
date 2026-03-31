'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1E5BB8]">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur border-b" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/duela.png"
              alt="DuelaCred Logo"
              width={64}
              height={64}
              className="h-14 w-auto drop-shadow-lg"
            />
          </div>
          <div className="hidden md:flex gap-8 text-[#1E5BB8]">
            <a href="#features" className="hover:underline transition">Features</a>
            <a href="#benefits" className="hover:underline transition">Benefits</a>
            <a href="#contact" className="hover:underline transition">Contact</a>
          </div>
          <button style={{ background: 'linear-gradient(90deg, #F4B400 0%, #F29900 100%)' }} className="text-white px-6 py-2 rounded-lg hover:shadow-lg transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 px-6 pb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-[#1E5BB8] mb-6 leading-tight">
            Smart Credit, Your Way
          </h1>
          <p className="text-xl md:text-2xl" style={{ color: '#333333' }}>
            Get instant approval for credit you trust. Transparent rates, flexible terms, and expert support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button style={{ background: 'linear-gradient(90deg, #F4B400 0%, #F29900 100%)' }} className="text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition text-lg">
              Apply Now
            </button>
            <button className="border-2 px-8 py-4 rounded-lg font-semibold hover:bg-[#2FA4E7]/10 transition text-lg" style={{ borderColor: '#1E5BB8', color: '#1E5BB8' }}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1E5BB8] text-center mb-16">Why Choose DuelaCred?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Instant Approval',
                desc: 'Get decision within minutes using our advanced assessment technology.'
              },
              {
                title: 'Competitive Rates',
                desc: 'No hidden fees. Transparent pricing based on your creditworthiness.'
              },
              {
                title: 'Flexible Repayment',
                desc: 'Choose terms that work for your budget - from 12 to 60 months.'
              },
              {
                title: 'Expert Support',
                desc: '24/7 dedicated support team ready to help with any questions.'
              },
              {
                title: 'Bank-Grade Security',
                desc: 'Military-grade encryption protects your personal & financial information.'
              },
              {
                title: 'Credit Building',
                desc: 'Every on-time payment reported to credit bureaus to boost your score.'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white shadow-sm border border-gray-100 p-8 rounded-xl hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1E5BB8' }}>{feature.title}</h3>
                <p className="text-[#333333]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1E5BB8] text-center mb-16">Credit Solutions That Match Your Life</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {[
                  'Fast Online Application',
                  'APRs from 4.99% to 35.99%',
                  'Loan Amounts up to $50,000',
                  'Fixed Monthly Payments',
                  'No Prepayment Penalties',
                  'Same-Day Funding Available'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'conic-gradient(from 180deg at 50% 50%, #F4B400, #F29900, #2FA4E7, #1E5BB8)' }}>
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <p className="text-[#333333] text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm">
              <p className="text-[#333333] mb-4">Trusted by thousands of borrowers. See why DuelaCred is the smarter choice for personal credit.</p>
              <div className="space-y-4">
                <div>
                  <p className="text-2xl font-bold" style={{ color: '#F4B400' }}>500K+</p>
                  <p className="text-[#333333]">Loans Funded</p>
                </div>
                <div>
                  <p className="text-2xl font-bold" style={{ color: '#F4B400' }}>$5B+</p>
                  <p className="text-[#333333]">Disbursed</p>
                </div>
                <div>
                  <p className="text-2xl font-bold" style={{ color: '#F4B400' }}>4.8/5</p>
                  <p className="text-[#333333]">Customer Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1E5BB8] mb-6">Get the Credit You Need, Today</h2>
          <p className="text-xl" style={{ color: '#333333' }}>
            It takes just 5 minutes to apply. Get your decision instantly.
          </p>
          <button style={{ background: 'linear-gradient(90deg, #F4B400 0%, #F29900 100%)' }} className="text-white px-20 py-5 rounded-lg font-semibold hover:shadow-2xl transition text-lg mt-8">
            Apply Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-12 px-6 bg-slate-900/50">
        <style>{`
          a.footer-link {
            color: currentColor;
            transition: color 0.3s;
          }
          a.footer-link:hover {
            color: #F4B400;
          }
        `}</style>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4" style={{ color: '#F4B400' }}>DuelaCred</h3>
              <p className="text-slate-400">Making credit accessible, transparent, and fair for everyone.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#features" className="footer-link">Features</a></li>
                <li><a href="#" className="footer-link">How It Works</a></li>
                <li><a href="#" className="footer-link">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="footer-link">About Us</a></li>
                <li><a href="#" className="footer-link">Blog</a></li>
                <li><a href="#" className="footer-link">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
                <li><a href="#" className="footer-link">Terms of Service</a></li>
                <li><a href="#" className="footer-link">Contact Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>&copy; 2026 DuelaCred. All rights reserved. | Licensed Lender in all 50 states.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
