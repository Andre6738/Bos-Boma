import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, Sparkles } from 'lucide-react';
import AmbientBlobs from './AmbientBlobs';
import { LOGO } from '../data/site';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent('Newsletter signup');
    const body = encodeURIComponent(
      `Please add me to the BosBoma newsletter.\n\nEmail: ${email}`
    );
    window.location.href = `mailto:info@bosboma.co.za?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="relative overflow-hidden bg-gradient-to-br from-bush via-bush-dark to-ink py-20 sm:py-24">
      <AmbientBlobs variant="warm" />
      <div className="container-prose relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: '0px 0px -10% 0px' }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="mx-auto max-w-3xl rounded-[2rem] bg-bone-50/95 p-8 shadow-card ring-1 ring-bone-50/40 backdrop-blur sm:p-12"
        >
          <div className="flex flex-col items-center text-center">
            <motion.img
              src={LOGO}
              alt="BosBoma"
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-14 w-auto sm:h-16"
            />
            <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-copper/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-copper">
              <Sparkles size={12} className="animate-flicker" />
              Stay in the loop
            </span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              Subscribe for events &{' '}
              <span className="text-gradient-warm italic">special offers</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
              Get first access to seasonal specials, open days and the kind of bushveld moments
              you will not want to miss.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Mail size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-copper" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full rounded-full border border-ink/10 bg-white py-3.5 pl-11 pr-5 text-sm text-ink placeholder:text-ink-mute focus:border-copper focus:outline-none focus:ring-4 focus:ring-copper/15"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="shine-on-hover inline-flex items-center justify-center gap-2 rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-bone-50 shadow-soft transition-colors hover:bg-copper-dark"
                >
                  Subscribe
                  <Send size={14} />
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-bush/10 px-5 py-3 text-sm font-semibold text-bush-dark"
              >
                <CheckCircle2 size={18} />
                Thanks! Your email app has opened to confirm.
              </motion.div>
            )}

            <p className="mt-4 text-[11px] text-ink-mute">
              We respect your inbox. Unsubscribe any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
