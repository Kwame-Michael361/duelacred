'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import SiteNavbar from '@/components/SiteNavbar';
import { supabase } from '@/lib/supabaseClient';

type ApplyForFundingForm = {
  fullName: string;
  email: string;
  phoneNumber: string;
  businessName: string;
  businessLocation: string;
  businessDescription: string;
  industry: 'Retail' | 'Agriculture' | 'Manufacturing' | 'Services' | 'Tech' | 'Other' | '';
  operatingDuration: 'Not started yet' | '< 1 year' | '1–3 years' | '3+ years' | '';
  fundingAmount: 'Under P5,000' | 'P5,000 – P20,000' | 'P20,000 – P100,000' | 'P100,000+' | '';
  fundsUsage: string;
  fundingTimeline: 'Immediately' | 'Within 1 month' | '1–3 months' | 'Just exploring' | '';
  generatesRevenue: 'Yes' | 'No' | '';
  monthlyRevenue: 'Under P5,000' | 'P5,000 – P20,000' | 'P20,000+' | '';
  employeesCount: 'Just me' | '2–5' | '6+' | '';
  repaymentPlan: string;
  priorFunding: 'Yes' | 'No' | '';
  businessStory: string;
  fundingImpact: string;
  confirmAccuracy: boolean;
};

const initialState: ApplyForFundingForm = {
  fullName: '',
  email: '',
  phoneNumber: '',
  businessName: '',
  businessLocation: '',
  businessDescription: '',
  industry: '',
  operatingDuration: '',
  fundingAmount: '',
  fundsUsage: '',
  fundingTimeline: '',
  generatesRevenue: '',
  monthlyRevenue: '',
  employeesCount: '',
  repaymentPlan: '',
  priorFunding: '',
  businessStory: '',
  fundingImpact: '',
  confirmAccuracy: false,
};

export default function ApplyForFundingPage() {
  const [form, setForm] = useState<ApplyForFundingForm>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const inputClassName = 'w-full rounded-lg border border-gray-200 bg-white p-3 text-slate-900 placeholder:text-slate-500';
  const textareaClassName = 'min-h-24 w-full rounded-lg border border-gray-200 bg-white p-3 text-slate-900 placeholder:text-slate-500';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const { error } = await supabase.from('funding_applications').insert({
      full_name: form.fullName,
      email: form.email,
      phone: form.phoneNumber,
      business_name: form.businessName,
      location: form.businessLocation,
      industry: form.industry,
      years_operating: form.operatingDuration,
      funding_amount: form.fundingAmount,
      use_of_funds: form.fundsUsage,
      funding_timeline: form.fundingTimeline,
      has_revenue: form.generatesRevenue === 'Yes',
      monthly_revenue: form.monthlyRevenue || null,
      employees: form.employeesCount,
      repayment_plan: form.repaymentPlan,
      previous_funding: form.priorFunding === 'Yes',
      business_description: form.businessDescription,
      business_impact: `${form.businessStory}\n\nFunding impact: ${form.fundingImpact}`,
    });

    if (error) {
      setMessage('Could not submit right now. Please try again.');
      setIsSubmitting(false);
      return;
    }

    setMessage('Submitted successfully. We will be in touch soon.');
    setForm(initialState);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <SiteNavbar showActions={false} />

      <main className="mx-auto max-w-4xl px-6 pb-16 pt-40">
        <Link href="/" className="mb-6 inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-[#1E5BB8] transition hover:shadow-sm">
          ← Back to Home
        </Link>
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-[#1E5BB8]">Apply for Funding</h1>
          <p className="mt-3 text-[#333333]">Share your business details so we can assess your funding application.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 rounded-2xl bg-white p-8 shadow-sm">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1E5BB8]">1. Basic Business Info</h2>
            <input required value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} placeholder="Full Name" className={inputClassName} />
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email Address" className={inputClassName} />
            <input required value={form.phoneNumber} onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })} placeholder="Phone Number" className={inputClassName} />
            <input required value={form.businessName} onChange={(e) => setForm({ ...form, businessName: e.target.value })} placeholder="Business Name" className={inputClassName} />
            <input required value={form.businessLocation} onChange={(e) => setForm({ ...form, businessLocation: e.target.value })} placeholder="Business Location (City, Country)" className={inputClassName} />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1E5BB8]">2. Business Overview</h2>
            <textarea required value={form.businessDescription} onChange={(e) => setForm({ ...form, businessDescription: e.target.value })} placeholder="What does your business do?" className={textareaClassName} />

            <fieldset>
              <legend className="mb-2 font-medium text-[#333333]">Industry</legend>
              <div className="grid gap-2 sm:grid-cols-3">
                {['Retail', 'Agriculture', 'Manufacturing', 'Services', 'Tech', 'Other'].map((industry) => (
                  <label key={industry} className="flex items-center gap-2 text-[#333333]">
                    <input required type="radio" name="industry" checked={form.industry === industry} onChange={() => setForm({ ...form, industry: industry as ApplyForFundingForm['industry'] })} />
                    {industry}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-2 font-medium text-[#333333]">How long have you been operating?</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {['Not started yet', '< 1 year', '1–3 years', '3+ years'].map((duration) => (
                  <label key={duration} className="flex items-center gap-2 text-[#333333]">
                    <input required type="radio" name="operatingDuration" checked={form.operatingDuration === duration} onChange={() => setForm({ ...form, operatingDuration: duration as ApplyForFundingForm['operatingDuration'] })} />
                    {duration}
                  </label>
                ))}
              </div>
            </fieldset>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1E5BB8]">3. Funding Details</h2>
            <fieldset>
              <legend className="mb-2 font-medium text-[#333333]">How much funding are you seeking?</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {['Under P5,000', 'P5,000 – P20,000', 'P20,000 – P100,000', 'P100,000+'].map((amount) => (
                  <label key={amount} className="flex items-center gap-2 text-[#333333]">
                    <input required type="radio" name="fundingAmount" checked={form.fundingAmount === amount} onChange={() => setForm({ ...form, fundingAmount: amount as ApplyForFundingForm['fundingAmount'] })} />
                    {amount}
                  </label>
                ))}
              </div>
            </fieldset>
            <textarea required value={form.fundsUsage} onChange={(e) => setForm({ ...form, fundsUsage: e.target.value })} placeholder="What will the funds be used for?" className={textareaClassName} />

            <fieldset>
              <legend className="mb-2 font-medium text-[#333333]">How soon do you need funding?</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {['Immediately', 'Within 1 month', '1–3 months', 'Just exploring'].map((timeline) => (
                  <label key={timeline} className="flex items-center gap-2 text-[#333333]">
                    <input required type="radio" name="fundingTimeline" checked={form.fundingTimeline === timeline} onChange={() => setForm({ ...form, fundingTimeline: timeline as ApplyForFundingForm['fundingTimeline'] })} />
                    {timeline}
                  </label>
                ))}
              </div>
            </fieldset>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1E5BB8]">4. Business Health</h2>
            <fieldset>
              <legend className="mb-2 font-medium text-[#333333]">Do you currently generate revenue?</legend>
              <div className="flex gap-4">
                {['Yes', 'No'].map((option) => (
                  <label key={option} className="flex items-center gap-2 text-[#333333]">
                    <input required type="radio" name="generatesRevenue" checked={form.generatesRevenue === option} onChange={() => setForm({ ...form, generatesRevenue: option as 'Yes' | 'No' })} />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-2 font-medium text-[#333333]">Estimated monthly revenue (optional)</legend>
              <div className="grid gap-2 sm:grid-cols-3">
                {['Under P5,000', 'P5,000 – P20,000', 'P20,000+'].map((revenue) => (
                  <label key={revenue} className="flex items-center gap-2 text-[#333333]">
                    <input type="radio" name="monthlyRevenue" checked={form.monthlyRevenue === revenue} onChange={() => setForm({ ...form, monthlyRevenue: revenue as ApplyForFundingForm['monthlyRevenue'] })} />
                    {revenue}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-2 font-medium text-[#333333]">Do you have employees?</legend>
              <div className="grid gap-2 sm:grid-cols-3">
                {['Just me', '2–5', '6+'].map((count) => (
                  <label key={count} className="flex items-center gap-2 text-[#333333]">
                    <input required type="radio" name="employeesCount" checked={form.employeesCount === count} onChange={() => setForm({ ...form, employeesCount: count as ApplyForFundingForm['employeesCount'] })} />
                    {count}
                  </label>
                ))}
              </div>
            </fieldset>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1E5BB8]">5. Repayment Readiness</h2>
            <textarea required value={form.repaymentPlan} onChange={(e) => setForm({ ...form, repaymentPlan: e.target.value })} placeholder="How do you plan to repay the funding?" className={textareaClassName} />
            <fieldset>
              <legend className="mb-2 font-medium text-[#333333]">Have you taken business funding/loans before?</legend>
              <div className="flex gap-4">
                {['Yes', 'No'].map((option) => (
                  <label key={option} className="flex items-center gap-2 text-[#333333]">
                    <input required type="radio" name="priorFunding" checked={form.priorFunding === option} onChange={() => setForm({ ...form, priorFunding: option as 'Yes' | 'No' })} />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1E5BB8]">6. Story</h2>
            <textarea required value={form.businessStory} onChange={(e) => setForm({ ...form, businessStory: e.target.value })} placeholder="Why does your business matter?" className={textareaClassName} />
            <textarea required value={form.fundingImpact} onChange={(e) => setForm({ ...form, fundingImpact: e.target.value })} placeholder="How will this funding impact your business?" className={textareaClassName} />
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-[#1E5BB8]">7. CTA</h2>
            <label className="flex items-start gap-3 text-[#333333]">
              <input type="checkbox" checked={form.confirmAccuracy} onChange={(e) => setForm({ ...form, confirmAccuracy: e.target.checked })} required className="mt-1" />
              I confirm that the information provided is accurate
            </label>
            <button disabled={isSubmitting} className="rounded-lg px-8 py-3 font-semibold text-white transition hover:shadow-lg disabled:opacity-70" style={{ background: 'linear-gradient(90deg, #111235 0%, #0d214d 100%)' }}>
              {isSubmitting ? 'Submitting...' : 'Apply for Funding'}
            </button>
          </section>

          {message ? <p className="text-sm text-[#1E5BB8]">{message}</p> : null}
        </form>
      </main>
    </div>
  );
}
