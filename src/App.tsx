import { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  ShieldCheck, 
  Activity, 
  Stethoscope, 
  ChevronRight, 
  Menu, 
  X,
  ArrowRight,
  HeartPulse,
  Syringe,
  Microscope,
  Baby
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    id: 1,
    title: 'Orthopaedics',
    description: 'Specialized care for bones, joints, and ligaments. Expert consultation by Dr. Bhargav.',
    icon: Activity,
    image: 'https://picsum.photos/seed/ortho/800/600'
  },
  {
    id: 2,
    title: 'General Physician',
    description: 'Comprehensive health checkups, chronic disease management, and family medicine.',
    icon: Stethoscope,
    image: 'https://picsum.photos/seed/doctor1/800/600'
  },
  {
    id: 3,
    title: 'Physiotherapy',
    description: 'Recovery and rehabilitation services for sports injuries and post-surgery care.',
    icon: HeartPulse,
    image: 'https://picsum.photos/seed/physio/800/600'
  },
  {
    id: 4,
    title: 'Diagnostics & Lab',
    description: 'Prompt blood tests and diagnostics with home sample collection services.',
    icon: Microscope,
    image: 'https://picsum.photos/seed/lab/800/600'
  }
];

const REVIEWS = [
  {
    name: "Vijay Y",
    rating: 5,
    text: "My go to hospital for any medical needs. Friendly staff, clean premises and best doctors. Received best treatment every time.",
    type: "Local Guide"
  },
  {
    name: "Kranthi N",
    rating: 5,
    text: "We visited Life Care Hospital for my mother's neck pain and dizziness. We consulted Dr. Bhargav (Orthopedic) who was excellent.",
    type: "Local Guide"
  },
  {
    name: "Prompt Service",
    rating: 5,
    text: "Prompt service with results delivered on time as promised. Staff & Management were very friendly.",
    type: "Verified Patient"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-clinic-bg selection:bg-clinic-accent selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-morphism py-3 shadow-md' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 medical-gradient rounded-xl flex items-center justify-center shadow-lg">
              <ShieldCheck className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl leading-none tracking-tight text-clinic-primary">LIFE CARE</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">CLINIC & HOSPITAL</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'About', 'Reviews', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-semibold text-slate-600 hover:text-clinic-primary transition-colors uppercase tracking-wider"
              >
                {item}
              </button>
            ))}
            <a 
              href="tel:08121008228"
              className="medical-gradient text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-clinic-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Book Appointment
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-clinic-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-white p-8 pt-24 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {['Services', 'About', 'Reviews', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-2xl font-display font-bold text-slate-800 text-left"
                >
                  {item}
                </button>
              ))}
              <div className="pt-8 border-t border-slate-100 italic text-slate-500">
                1st floor, block 1&2, Plot No 528, Pragathi Nagar Rd, Hyderabad.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-clinic-bg rounded-l-[100px] hidden lg:block" />
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 bg-clinic-bg text-clinic-primary px-4 py-1 rounded-full text-xs font-bold mb-6">
                <Star className="w-3 h-3 fill-clinic-primary" />
                Trusted by 1000+ locally in Pragathi Nagar
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-clinic-text leading-[1.1] mb-6">
                Compassionate Care, <span className="text-clinic-primary">Exceptional Results.</span>
              </h1>
              <p className="text-lg text-clinic-text/70 mb-8 max-w-lg leading-relaxed">
                Expert Orthopaedic and General Physician services dedicated to your health and rehabilitation. Led by Dr. Bhargav, we provide prompt, professional medical care.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="medical-gradient text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-clinic-primary/30 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-2"
                >
                  Consult Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-4 py-2">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <img 
                        key={i}
                        src={`https://picsum.photos/seed/user${i}/100/100`} 
                        className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex text-amber-500">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-xs font-bold text-slate-500">4.6/5 (115 reviews)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-clinic-accent/20 blur-3xl rounded-full -z-10" />
              <img 
                src="https://picsum.photos/seed/medical-team/800/1000" 
                alt="Clinic Team"
                className="rounded-[40px] shadow-2xl object-cover aspect-[4/5] w-full max-w-md mx-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 glass-morphism p-6 rounded-3xl shadow-xl max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-sm font-bold text-slate-800 tracking-tight">Open Now</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">Closes at 9:30 PM. Home sample collection available.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-clinic-primary py-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Rating', value: '4.6' },
              { label: 'Reviews', value: '115+' },
              { label: 'Expert Doctors', value: 'MD Only' },
              { label: 'Patient Trust', value: '100%' }
            ].map((stat, idx) => (
              <div key={idx} className="text-white">
                <p className="text-3xl md:text-4xl font-display font-bold mb-1 tracking-tight">{stat.value}</p>
                <p className="text-clinic-accent text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-sm font-bold text-clinic-primary uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-display font-medium text-clinic-text mb-6">Specialized Care for You</h3>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg italic">
                Life Care Clinic offers a range of medical services designed to get you back on your feet quickly and safely.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((service) => (
                <motion.div
                  key={service.id}
                  whileHover={{ scale: 1.05, translateY: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative bg-white rounded-[32px] overflow-hidden border border-clinic-primary/5 service-block-hover cursor-pointer"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 py-10 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  </div>
                  <div className="p-8">
                    <div className="w-14 h-14 medical-gradient rounded-2xl flex items-center justify-center shadow-lg -mt-16 mb-6 relative z-10">
                      <service.icon className="text-white w-7 h-7" />
                    </div>
                    <h4 className="font-display font-bold text-xl text-clinic-text mb-3 tracking-tight">{service.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6 italic">{service.description}</p>
                    <button className="text-clinic-primary text-xs font-bold flex items-center gap-2 group/btn">
                      LEARN MORE
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-clinic-bg overflow-hidden relative">
          <div className="absolute top-0 left-0 w-64 h-64 medical-gradient opacity-[0.03] rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-white p-4 rounded-[40px] shadow-2xl relative z-10">
                <img 
                  src="https://picsum.photos/seed/doctor-consulting/800/1000" 
                  alt="Dr. Bhargav"
                  className="rounded-[32px] object-cover aspect-[4/5] w-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 medical-gradient rounded-[40px] -z-10" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-clinic-primary uppercase tracking-[0.3em] mb-4">Who We Are</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-clinic-text mb-8 leading-tight">Expert Medical Care in the Heart of Hyderabad</h3>
              <div className="space-y-6 text-slate-600 leading-relaxed italic">
                <p>
                  At Life Care Clinic, we believe in treating every patient with the same care we would give our own family. Our facility is equipped with state-of-the-art diagnostics and the best medical minds.
                </p>
                <p>
                  Specializing in Orthopaedics under the guidance of <strong>Dr. Bhargav</strong>, our clinical team is dedicated to addressing musculoskeletal issues, chronic pains, and dizziness with precise diagnosis and effective treatment plans.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <Syringe className="text-clinic-primary w-5 h-5" />
                  </div>
                  <h5 className="font-bold text-slate-900 tracking-tight">MD Doctors</h5>
                  <p className="text-xs text-slate-500 font-medium">Only highly qualified MD professionals handle your care.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <Baby className="text-clinic-primary w-5 h-5" />
                  </div>
                  <h5 className="font-bold text-slate-900 tracking-tight">Family Care</h5>
                  <p className="text-xs text-slate-500 font-medium">From children to seniors, we serve all age groups.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-sm font-bold text-clinic-primary uppercase tracking-[0.3em] mb-4">Testimonials</h2>
                <h3 className="text-4xl font-display font-bold text-clinic-text">Patient Experiences</h3>
              </div>
              <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 italic">
                <div className="text-3xl font-display font-bold text-slate-800">4.6</div>
                <div className="flex flex-col">
                  <div className="flex text-amber-500">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-xs font-bold text-slate-400">Google Reviews (115)</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {REVIEWS.map((review, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 flex flex-col justify-between hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                  <div>
                    <div className="flex text-amber-400 mb-6 italic font-bold text-sm">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-slate-600 mb-8 leading-relaxed italic italic">"{review.text}"</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-clinic-accent/10 rounded-full flex items-center justify-center font-bold text-clinic-primary font-display">
                      {review.name[0]}
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm tracking-tight">{review.name}</h5>
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{review.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-clinic-primary opacity-10 rounded-full blur-[120px] -z-0" />
          <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-sm font-bold text-clinic-accent uppercase tracking-[0.3em] mb-6">Contact Us</h2>
              <h3 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight">Available For You Every Day.</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-clinic-accent/20 transition-colors">
                    <Phone className="w-6 h-6 text-clinic-accent" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-white/40 tracking-widest mb-1">Emergency & Appointments</p>
                    <a href="tel:08121008228" className="text-2xl font-display font-bold hover:text-clinic-accent transition-colors">081210 08228</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-clinic-accent/20 transition-colors">
                    <MapPin className="w-6 h-6 text-clinic-accent" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-white/40 tracking-widest mb-1">Located At</p>
                    <p className="text-lg font-medium leading-relaxed max-w-sm italic">
                      1st floor, block 1&2, Plot No 528, Pragathi Nagar Rd, Bachupally, Hyderabad, 500090.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-clinic-accent/20 transition-colors">
                    <Clock className="w-6 h-6 text-clinic-accent" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-white/40 tracking-widest mb-1">Working Hours</p>
                    <p className="text-lg font-medium">Mon - Sun: 9:00 AM - 9:30 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-16 border-t border-white/10 flex items-center gap-6 italic">
                <div className="text-center">
                  <p className="text-3xl font-display font-bold text-clinic-accent">4.6</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/30">Google Rating</p>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div className="text-center">
                  <p className="text-3xl font-display font-bold text-clinic-accent">115</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/30">Total Reviews</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 md:p-12 rounded-[40px] border border-white/10 backdrop-blur-sm shadow-2xl">
              <h4 className="text-2xl font-display font-bold mb-8">Send Us a Message</h4>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-clinic-accent outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Phone Number</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-clinic-accent outline-none transition-colors" placeholder="+91 00000 00000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Inquiry Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-clinic-accent outline-none transition-colors appearance-none">
                    <option className="bg-slate-900">Appointment Request</option>
                    <option className="bg-slate-900">Home Sample Collection</option>
                    <option className="bg-slate-900">General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Your Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-clinic-accent outline-none transition-colors resize-none" placeholder="Describe your health concern..." />
                </div>
                <button className="w-full py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-clinic-accent transition-all active:scale-95 shadow-lg shadow-white/5">
                  Request Callback
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-clinic-accent w-6 h-6" />
            <span className="font-display font-bold text-white uppercase tracking-wider">Life Care Clinic</span>
          </div>
          <p className="text-white/40 text-xs italic">
            © 2024 Life Care Clinic & Hospital. Pragathi Nagar, Hyderabad. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Sitemap'].map(item => (
              <a key={item} href="#" className="text-[10px] uppercase font-bold text-white/20 hover:text-white transition-colors tracking-widest">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
      
      {/* Floating Action for Mobile */}
      <a 
        href="tel:08121008228"
        className="md:hidden fixed bottom-6 right-6 w-16 h-16 medical-gradient text-white rounded-full flex items-center justify-center shadow-2xl z-50 animate-bounce cursor-pointer active:scale-90 transition-all shadow-clinic-primary/40"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}

