'use client';

import Image from 'next/image';
import Link from 'next/link';
import SiteNavbar from '@/components/SiteNavbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1E5BB8]">
      {/* Navigation */}
      <SiteNavbar />

      {/* Hero Section */}
      <section className="pb-20 px-6 pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-[#1E5BB8] md:text-7xl">
              Invest in Local Businesses. Grow Together.
            </h1>
            <p className="text-xl text-[#333333] md:text-2xl">
              Duela Cred lets everyday people fund African SMEs and earn returns while helping communities grow.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/start-investing" style={{ background: 'linear-gradient(90deg, #F4B400 0%, #F29900 100%)' }} className="rounded-lg px-8 py-4 text-center text-lg font-semibold text-white transition hover:shadow-xl">
                Start Investing
              </Link>
              <Link href="/apply-for-funding" style={{ background: 'linear-gradient(90deg, #111235 0%, #0d214d 100%)' }} className="rounded-lg px-8 py-4 text-center text-lg font-semibold text-white transition hover:shadow-xl">
                Apply for Funding
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/hero.png"
              alt="A smiling woman using a phone inside a small shop"
              width={640}
              height={640}
              className="h-full w-full rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-bold text-[#1E5BB8]">How It Works</h1>
            <p className="text-xl text-[#333333]">
              Three simple steps to start investing in Botswana businesses.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                number: '1',
                title: 'Browse Opportunities',
                description:
                  'Explore SME opportunities on the marketplace, each vetted and ready for investment.'
              },
              {
                number: '2',
                title: 'Invest Any Amount',
                description:
                  'Choose a business you believe in and invest — starting from as little as P100.'
              },
              {
                number: '3',
                title: 'Earn Returns',
                description:
                  'Earn returns as businesses repay their funding through revenue-based repayments.'
              }
            ].map((step) => (
              <div key={step.number} className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#1E5BB8] text-lg font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#1E5BB8]">{step.title}</h3>
                <p className="text-[#333333]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Duela Cred Section */}
      <section className="bg-gray-100 py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">Why Duela Cred</h2>
            <p className="mt-3 text-lg text-slate-400">Built for impact, designed for returns.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border-t-2 border-gray-100 bg-white p-6 shadow-sm" style={{ borderTopColor: '#F4B400' }}>
              <svg className="mb-4 h-7 w-7 text-[#1E5BB8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M12 3v18M7 8.5C7 6.57 8.57 5 10.5 5h3a3.5 3.5 0 1 1 0 7h-3a3.5 3.5 0 1 0 0 7h3c1.93 0 3.5-1.57 3.5-3.5" />
              </svg>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Invest from small amounts</h3>
              <p className="text-sm leading-relaxed text-slate-700">No minimum barriers — start with what you have and grow your portfolio over time.</p>
            </div>

            <div className="rounded-xl border-t-2 border-gray-100 bg-white p-6 shadow-sm" style={{ borderTopColor: '#F4B400' }}>
              <svg className="mb-4 h-7 w-7 text-[#1E5BB8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M3 11.5 12 4l9 7.5" />
                <path d="M5 10.5V20h14v-9.5" />
                <path d="M10 20v-5h4v5" />
              </svg>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Support local businesses</h3>
              <p className="text-sm leading-relaxed text-slate-700">Your capital directly funds African entrepreneurs building real businesses.</p>
            </div>

            <div className="rounded-xl border-t-2 border-gray-100 bg-white p-6 shadow-sm" style={{ borderTopColor: '#F4B400' }}>
              <svg className="mb-4 h-7 w-7 text-[#1E5BB8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M4 19h16" />
                <path d="M7 16v-4" />
                <path d="M12 16V9" />
                <path d="M17 16V6" />
              </svg>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Transparent tracking</h3>
              <p className="text-sm leading-relaxed text-slate-700">Track every repayment in real time with full visibility into your returns.</p>
            </div>

            <div className="rounded-xl border-t-2 border-gray-100 bg-white p-6 shadow-sm" style={{ borderTopColor: '#F4B400' }}>
              <svg className="mb-4 h-7 w-7 text-[#1E5BB8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="12" cy="12" r="8" />
                <path d="M4 12h16" />
                <path d="M12 4a12 12 0 0 1 0 16" />
                <path d="M12 4a12 12 0 0 0 0 16" />
              </svg>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Botswana SME focus</h3>
              <p className="text-sm leading-relaxed text-slate-700">Purpose-built for Botswana's thriving and fast-growing entrepreneurial ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-[#111235] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-3 text-4xl font-bold text-white md:text-5xl">Built for Botswana's Builders</h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-slate-400">
            We’re just getting started — and we want you to be part of it from day one. Duela Cred is opening its doors to its first wave of investors and SMEs in Botswana. Join early and help shape the future of community-driven finance.
          </p>
          <button className="rounded-full bg-[#F4B400] px-8 py-3 font-semibold text-[#111235] transition hover:brightness-105">
            Get Early Access →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 px-6 bg-white">
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
              <p className="text-[#333333]">Making credit accessible, transparent, and fair for everyone.</p>
            </div>
            <div>
              <h4 className="text-[#1E5BB8] font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-[#333333]">
                <li><a href="#how-it-works" className="footer-link">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#1E5BB8] font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-[#333333]">
                <li><a href="#" className="footer-link">About Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>&copy; 2026 DuelaCred. All rights reserved. </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
