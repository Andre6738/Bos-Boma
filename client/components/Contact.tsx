import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle2, Calendar, User, MessageSquare } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { SITE } from '../data/site';

interface FormState {
  brideName: string;
  groomName: string;
  email: string;
  phone: string;
  eventDate: string;
  reachingAs: 'Couple' | 'Guest' | 'Other';
  message: string;
}

const EMPTY: FormState = {
  brideName: '',
  groomName: '',
  email: '',
  phone: '',
  eventDate: '',
  reachingAs: 'Couple',
  message: ''
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [sent, setSent] = useState(false);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`BosBoma enquiry from ${form.brideName || form.groomName || 'website'}`);
    const lines = [
      `Bride: ${form.brideName}`,
      `Groom: ${form.groomName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Event date: ${form.eventDate || 'not set'}`,
      `Reaching out as: ${form.reachingAs}`,
      '',
      form.message
    ];
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `${SITE.emailHref}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section relative overflow-hidden bg-gradient-to-b from-bone-50 to-sand-50">
      <div className="container-prose">
        <SectionHeading
          eyebrow="Connect with our team"
          title="Start your journey with us."
          subtitle="Request a private tour or brochure and our team will respond promptly."
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0, margin: '0px 0px -10% 0px' }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            className="card p-7 sm:p-9"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="label" htmlFor="brideName">Bride name</label>
                <input
                  id="brideName"
                  className="input"
                  value={form.brideName}
                  onChange={(e) => set('brideName', e.target.value)}
                  placeholder="First name"
                />
              </div>
              <div>
                <label className="label" htmlFor="groomName">Groom name</label>
                <input
                  id="groomName"
                  className="input"
                  value={form.groomName}
                  onChange={(e) => set('groomName', e.target.value)}
                  placeholder="First name"
                />
              </div>
              <div>
                <label className="label" htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="input"
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="label" htmlFor="phone">Phone number</label>
                <input
                  id="phone"
                  type="tel"
                  className="input"
                  value={form.phone}
                  onChange={(e) => set('phone', e.target.value)}
                  placeholder="+27 …"
                />
              </div>
              <div>
                <label className="label" htmlFor="eventDate">Event date (optional)</label>
                <input
                  id="eventDate"
                  type="date"
                  className="input"
                  value={form.eventDate}
                  onChange={(e) => set('eventDate', e.target.value)}
                />
              </div>
              <div>
                <label className="label" htmlFor="reachingAs">I am reaching out as</label>
                <select
                  id="reachingAs"
                  className="input"
                  value={form.reachingAs}
                  onChange={(e) => set('reachingAs', e.target.value as FormState['reachingAs'])}
                >
                  <option>Couple</option>
                  <option>Guest</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="label" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                className="input resize-none"
                value={form.message}
                onChange={(e) => set('message', e.target.value)}
                placeholder="Tell us a little about your celebration…"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button type="submit" className="btn-primary">
                <Send size={16} />
                Send enquiry
              </button>
              {sent && (
                <span className="inline-flex items-center gap-2 text-sm font-medium text-bush">
                  <CheckCircle2 size={16} /> Your email app should open. Thank you!
                </span>
              )}
            </div>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0, margin: '0px 0px -10% 0px' }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1], delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <a
              href={SITE.phoneHref}
              className="group flex items-center gap-4 rounded-3xl bg-bush p-6 text-bone-50 shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-bone-50/15 backdrop-blur">
                <Phone size={20} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-sand-200">Call</p>
                <p className="font-display text-2xl">{SITE.phone}</p>
              </div>
            </a>
            <a
              href={SITE.emailHref}
              className="group flex items-center gap-4 rounded-3xl bg-copper p-6 text-bone-50 shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-bone-50/15 backdrop-blur">
                <Mail size={20} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-sand-200/90">Email</p>
                <p className="font-display text-xl break-all">{SITE.email}</p>
              </div>
            </a>
            <div className="card flex items-start gap-4 p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ember/10 text-ember">
                <Calendar size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Private tours by appointment</p>
                <p className="mt-1 text-sm text-ink-soft">
                  Tours are arranged personally so you can experience the venue at its best.
                </p>
              </div>
            </div>
            <div className="card flex items-start gap-4 p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-bush/10 text-bush">
                <User size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Speak to a real person</p>
                <p className="mt-1 text-sm text-ink-soft">
                  Isabel and the BosBoma team will guide you from the first visit to the final toast.
                </p>
              </div>
            </div>
            <div className="card flex items-start gap-4 p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-copper/10 text-copper">
                <MessageSquare size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Quick replies</p>
                <p className="mt-1 text-sm text-ink-soft">We typically respond within one business day.</p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
