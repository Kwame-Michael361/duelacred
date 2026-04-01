'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import SiteNavbar from '@/components/SiteNavbar';
import { supabase } from '@/lib/supabaseClient';

type StartInvestingForm = {
  fullName: string;
  email: string;
  phoneNumber: string;
  countryOfResidence: string;
  basedInBotswana: 'Yes' | 'No' | '';
  investedBefore: 'Yes' | 'No' | '';
  investmentTypes: string[];
  investmentExperience: 'Beginner' | 'Intermediate' | 'Experienced' | '';
  startAmount: 'Under P500' | 'P500 – P2,000' | 'P2,000 – P10,000' | 'P10,000+' | '';
  investmentFrequency: 'One-time' | 'Monthly' | 'Occasionally' | '';
  mainGoals: string[];
  riskLevel: 'Low (stable returns)' | 'Medium' | 'High (higher risk, higher return)' | '';
  businessInterests: 'Retail' | 'Agriculture' | 'Tech' | 'Services' | 'Open to all' | '';
  confidenceFactors: string;
  questionsOrConcerns: string;
  earlyAccess: boolean;
};

const initialState: StartInvestingForm = {
  fullName: '',
  email: '',
  phoneNumber: '',
  countryOfResidence: '',
  basedInBotswana: '',
  investedBefore: '',
  investmentTypes: [],
  investmentExperience: '',
  startAmount: '',
  investmentFrequency: '',
  mainGoals: [],
  riskLevel: '',
  businessInterests: '',
  confidenceFactors: '',
  questionsOrConcerns: '',
  earlyAccess: false,
};

export default function StartInvestingPage() {
  const [form, setForm] = useState<StartInvestingForm>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const inputClassName = 'w-full rounded-lg border border-gray-200 bg-white p-3 text-slate-900 placeholder:text-slate-500';
  const textareaClassName = 'min-h-24 w-full rounded-lg border border-gray-200 bg-white p-3 text-slate-900 placeholder:text-slate-500';

  const toggleMultiSelect = (
    key: 'investmentTypes' | 'mainGoals',
    value: string,
    maxSelections?: number
  ) => {
    setForm((prev) => {
      const exists = prev[key].includes(value);
      if (exists) {
        return { ...prev, [key]: prev[key].filter((item) => item !== value) };
      }

      if (maxSelections && prev[key].length >= maxSelections) {
        return prev;
      }

      return { ...prev, [key]: [...prev[key], value] };
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const additionalContext = [
      `Based in Botswana: ${form.basedInBotswana || 'Not provided'}`,
      `Invested before: ${form.investedBefore || 'Not provided'}`,
      `Past investment types: ${form.investmentTypes.length ? form.investmentTypes.join(', ') : 'None selected'}`,
      `Early access opt-in: ${form.earlyAccess ? 'Yes' : 'No'}`,
      form.questionsOrConcerns ? `Questions/concerns: ${form.questionsOrConcerns}` : '',
    ]
      .filter(Boolean)
      .join(' | ');

    const { error } = await supabase.from('investors').insert({
      full_name: form.fullName,
      email: form.email,
      phone: form.phoneNumber || null,
      country: form.countryOfResidence,
      experience_level: form.investmentExperience,
      investment_amount: form.startAmount,
      investment_frequency: form.investmentFrequency,
      goals: form.mainGoals,
      risk_level: form.riskLevel,
      business_interest: form.businessInterests ? [form.businessInterests] : [],
      confidence_factors: form.confidenceFactors,
      questions: additionalContext || null,
    });

    if (error) {
      setMessage('Could not submit right now. Please try again.');
      setIsSubmitting(false);
      return;
    }

    setMessage('Submitted successfully. We will contact you soon.');
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
          <h1 className="text-4xl font-bold text-[#1E5BB8]">Start Investing</h1>
          <p className="mt-3 text-[#333333]">Tell us about yourself and how you want to invest.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 rounded-2xl bg-white p-8 shadow-sm">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1E5BB8]">1. Basic Information</h2>
            <input required value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} placeholder="Full Name" className={inputClassName} />
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email Address" className={inputClassName} />
            <input value={form.phoneNumber} onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })} placeholder="Phone Number (optional)" className={inputClassName} />
            <input required value={form.countryOfResidence} onChange={(e) => setForm({ ...form, countryOfResidence: e.target.value })} placeholder="Country of Residence" className={inputClassName} />
            <fieldset>
              <legend className="mb-2 font-medium text-[#333333]">Are you currently based in Botswana?</legend>
              <div className="flex gap-4">
                {['Yes', 'No'].map((option) => (
                  <label key={option} className="flex items-center gap-2 text-[#333333]">
                    <input required type="radio" name="basedInBotswana" checked={form.basedInBotswana === option} onChange={() => setForm({ ...form, basedInBotswana: option as 'Yes' | 'No' })} />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1E5BB8]">2. Investor Profile</h2>
            <fieldset>
              <legend className="mb-2 font-medium text-[#333333]">Have you invested before?</legend>
              <div className="flex gap-4">
                {['Yes', 'No'].map((option) => (
                  <label key={option} className="flex items-center gap-2 text-[#333333]">
                    <input required type="radio" name="investedBefore" checked={form.investedBefore === option} onChange={() => setForm({ ...form, investedBefore: option as 'Yes' | 'No' })} />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-2 font-medium text-[#333333]">What type of investments have you made? (Select all that apply)</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {['Stocks', 'Real estate', 'Crypto', 'Private businesses / startups', 'None'].map((type) => (
                  <label key={type} className="flex items-center gap-2 text-[#333333]">
                    <input type="checkbox" checked={form.investmentTypes.includes(type)} onChange={() => toggleMultiSelect('investmentTypes', type)} />
                    {type}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-2 font-medium text-[#333333]">How would you describe your investment experience?</legend>
              <div className="grid gap-2 sm:grid-cols-3">
                {['Beginner', 'Intermediate', 'Experienced'].map((level) => (
                  <label key={level} className="flex items-center gap-2 text-[#333333]">
                    <input required type="radio" name="investmentExperience" checked={form.investmentExperience === level} onChange={() => setForm({ ...form, investmentExperience: level as StartInvestingForm['investmentExperience'] })} />
                    {level}
                  </label>
                ))}
              </div>
            </fieldset>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1E5BB8]">3. Investment Intent</h2>
            <fieldset>
              <legend className="mb-2 font-medium text-[#333333]">How much are you looking to start investing with?</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {['Under P500', 'P500 – P2,000', 'P2,000 – P10,000', 'P10,000+'].map((amount) => (
                  <label key={amount} className="flex items-center gap-2 text-[#333333]">
                    <input required type="radio" name="startAmount" checked={form.startAmount === amount} onChange={() => setForm({ ...form, startAmount: amount as StartInvestingForm['startAmount'] })} />
                    {amount}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-2 font-medium text-[#333333]">How often would you like to invest?</legend>
              <div className="grid gap-2 sm:grid-cols-3">
                {['One-time', 'Monthly', 'Occasionally'].map((frequency) => (
                  <label key={frequency} className="flex items-center gap-2 text-[#333333]">
                    <input required type="radio" name="investmentFrequency" checked={form.investmentFrequency === frequency} onChange={() => setForm({ ...form, investmentFrequency: frequency as StartInvestingForm['investmentFrequency'] })} />
                    {frequency}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-2 font-medium text-[#333333]">What are your main goals? (Select up to 2)</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {['Grow my money', 'Earn passive income', 'Support local businesses', 'Learn about investing'].map((goal) => (
                  <label key={goal} className="flex items-center gap-2 text-[#333333]">
                    <input
                      type="checkbox"
                      checked={form.mainGoals.includes(goal)}
                      onChange={() => toggleMultiSelect('mainGoals', goal, 2)}
                    />
                    {goal}
                  </label>
                ))}
              </div>
            </fieldset>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1E5BB8]">4. Risk & Preferences</h2>
            <fieldset>
              <legend className="mb-2 font-medium text-[#333333]">What level of risk are you comfortable with?</legend>
              <div className="grid gap-2 sm:grid-cols-3">
                {['Low (stable returns)', 'Medium', 'High (higher risk, higher return)'].map((risk) => (
                  <label key={risk} className="flex items-center gap-2 text-[#333333]">
                    <input required type="radio" name="riskLevel" checked={form.riskLevel === risk} onChange={() => setForm({ ...form, riskLevel: risk as StartInvestingForm['riskLevel'] })} />
                    {risk}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-2 font-medium text-[#333333]">What types of businesses interest you most?</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {['Retail', 'Agriculture', 'Tech', 'Services', 'Open to all'].map((interest) => (
                  <label key={interest} className="flex items-center gap-2 text-[#333333]">
                    <input required type="radio" name="businessInterests" checked={form.businessInterests === interest} onChange={() => setForm({ ...form, businessInterests: interest as StartInvestingForm['businessInterests'] })} />
                    {interest}
                  </label>
                ))}
              </div>
            </fieldset>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1E5BB8]">5. Trust & Conversion</h2>
            <textarea required value={form.confidenceFactors} onChange={(e) => setForm({ ...form, confidenceFactors: e.target.value })} placeholder="What would make you feel confident investing through this platform?" className={textareaClassName} />
            <textarea value={form.questionsOrConcerns} onChange={(e) => setForm({ ...form, questionsOrConcerns: e.target.value })} placeholder="Any questions or concerns? (optional)" className={textareaClassName} />
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-[#1E5BB8]">6. CTA</h2>
            <label className="flex items-start gap-3 text-[#333333]">
              <input type="checkbox" checked={form.earlyAccess} onChange={(e) => setForm({ ...form, earlyAccess: e.target.checked })} required className="mt-1" />
              I’d like early access to investment opportunities on Duela Cred
            </label>
            <button disabled={isSubmitting} className="rounded-lg px-8 py-3 font-semibold text-white transition hover:shadow-lg disabled:opacity-70" style={{ background: 'linear-gradient(90deg, #F4B400 0%, #F29900 100%)' }}>
              {isSubmitting ? 'Submitting...' : 'Start Investing'}
            </button>
          </section>

          {message ? <p className="text-sm text-[#1E5BB8]">{message}</p> : null}
        </form>
      </main>
    </div>
  );
}
