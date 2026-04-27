/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Heart, Users, Brain, Activity, HandHeart, Coffee, Clock, Sparkles, Utensils, Pill, Droplets, ArrowDownUp, Car, ClipboardList, Mail, Menu, X, DollarSign, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { SERVICES } from '@/src/constants';
import { WaveDivider } from '@/src/components/WaveDivider';

const serviceIcons: Record<string, any> = {
  "Dementia Care": Brain,
  "Parkinson's Care": Activity,
  "Companionship": HandHeart,
  "Respite Care": Coffee,
  "24-Hour Care": Clock,
  "Personal Care": Sparkles,
  "Meal Preparation": Utensils,
  "Medication Reminders": Pill,
  "Bathing & Dressing": Droplets,
  "Mobility & Transfers": ArrowDownUp,
  "Errands & Transportation": Car,
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const aboutUsCopy = [
    "At Kindness & Compassionate LLC, we believe that every individual deserves to be treated with the utmost respect and dignity. Our mission is to provide personalized, non-medical in-home care that empowers our clients while giving their families the peace of mind they deserve.",
    "Founded on the principles of warmth and integrity, we handpick caregivers who are not only trained professionals but also truly compassionate people. For us, providing care is not just a service—it is a calling to make a tangible difference in the lives of those we serve.",
    "Because caring is not just what we do—it’s who we are. We proudly serve Seattle and surrounding areas, including Port Orchard, Bremerton, Silverdale, Poulsbo, and Bainbridge Island, ensuring that your loved ones receive the localized attention and support they need, right in the comfort of their own home."
  ];

  return (
    <div className="min-h-screen bg-sky-50 font-sans text-stone-900 selection:bg-pink-100 selection:text-pink-900">
      <nav className="sticky top-0 z-50 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">
          <div className="absolute -bottom-8 left-4 z-50">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-stone-100 shadow-xl transition-transform hover:scale-105 active:scale-95 cursor-pointer">
             <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center border-2 border-pink-200">
                <img 
                  src="/assets/logo2.png" 
                  alt="Kindness and Compassionate Logo" 
                  className="w-10 h-10 object-contain"/>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 pl-24">
            <span className="font-serif font-bold text-2xl text-stone-950">Kindness & Compassionate</span>
          </div>
          <div className="hidden md:flex gap-8 font-medium text-stone-700">
            <a href="#about" className="hover:text-pink-700 transition-colors">About Us</a>
            <a href="#services" className="hover:text-pink-700 transition-colors">Services</a>
            <a href="#careers" className="hover:text-pink-700 transition-colors">Careers</a>
            <a href="#contact" className="hover:text-pink-700 transition-colors">Contact Us</a>
          </div>
          <div className="hidden md:flex">
            <a href="tel:+14259671892" className="flex items-center gap-2 bg-amber-400 text-stone-950 px-6 py-2.5 rounded-full font-bold shadow-sm hover:bg-amber-500 hover:shadow-md transition-all active:scale-95">
                <Phone className="w-4 h-4" />
                (425) 967-1892
            </a>
          </div>
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="md:hidden bg-white border-t border-stone-100 px-4 py-4 space-y-4"
                >
                    <a href="#about" className="block hover:text-pink-700 font-medium" onClick={() => setIsMenuOpen(false)}>About Us</a>
                    <a href="#services" className="block hover:text-pink-700 font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
                    <a href="#careers" className="block hover:text-pink-700 font-medium" onClick={() => setIsMenuOpen(false)}>Careers</a>
                    <a href="#contact" className="block text-pink-700 font-bold" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
                </motion.div>
            )}
        </AnimatePresence>
      </nav>

      <header className="bg-stone-950 text-white overflow-hidden relative">
        <div className="flex flex-col md:flex-row min-h-[600px] pb-24 md:pb-0">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}                
            className="flex-1 flex items-center p-8 md:p-16 lg:p-24 relative z-10"
          >
            <div className="max-w-xl">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 bg-pink-600/20 text-pink-400 rounded-full text-sm font-bold tracking-wide uppercase mb-6"
              >
                In-Home Care Services
              </motion.div>
              <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8 font-medium">
                Kindness, Compassion, and Dignified <span className='text-pink-400 italic'>Care.</span>
              </h1>
              <p className="text-xl text-stone-300 mb-10 leading-relaxed font-light">
                Bringing love into every home. We provide loving, dependable, and personalized care in the comfort of your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-pink-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-600/20 transition-all active:scale-95 text-center">
                  Book a Consultation
                </a>
                <a href="#services" className="border border-stone-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-stone-900 transition-all text-center">
                  View Our Services
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="flex-1 relative min-h-[400px] md:min-h-full"
          >
            <img 
              src="/assets/landingpg.jpg" 
              alt="Caregiver and elderly woman sharing a moment" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-transparent to-transparent md:block hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 to-transparent"></div>
          </motion.div>
        </div>
        
        {/* The Wave Divider overlaps the bottom of the header */}
        <div className="absolute bottom-0 left-0 w-full z-20 text-stone-50">
          <WaveDivider />
        </div>
      </header>
      
      <section id="about" className="py-24 bg-stone-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-4 relative">
                <div className="absolute -inset-10 bg-pink-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
                <motion.img 
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  src="/assets/about11.jpg" 
                  alt="Professional caregiver" 
                  className="aspect-square object-cover rounded-3xl shadow-xl -rotate-3 transition-all duration-500" 
                  referrerPolicy="no-referrer" 
                />
                <motion.img 
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  src="/assets/about2.jpg" 
                  alt="Elderly client smiling" 
                  className="aspect-square object-cover rounded-3xl shadow-xl rotate-2 transition-all duration-500 mt-12" 
                  referrerPolicy="no-referrer" 
                />
                <motion.img 
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  src="/assets/about4.jpg" 
                  alt="Holding hands care" 
                  className="aspect-square object-cover rounded-3xl shadow-xl rotate-3 transition-all duration-500 -mt-12" 
                  referrerPolicy="no-referrer" 
                />
                <motion.img 
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  src="/assets/about3.jpg" 
                  alt="Comfortable home environment" 
                  className="aspect-square object-cover rounded-3xl shadow-xl -rotate-2 transition-all duration-500" 
                  referrerPolicy="no-referrer" 
                />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
                <div className="inline-block px-4 py-1 bg-stone-200 text-stone-600 rounded-full text-xs font-bold tracking-widest uppercase mb-4">Our Story</div>
                <h2 className="font-serif text-5xl text-stone-950 mb-10 leading-tight">Authentic Care Rooted in <span className="text-pink-600">Integrity.</span></h2>
                <div className="space-y-6">
                  {aboutUsCopy.map((para, i) => (
                    <p key={i} className="text-xl text-stone-600 leading-relaxed font-light">{para}</p>
                  ))}
                </div>
            </motion.div>
        </div>
      </section>

      <section id="careers" className="py-24 bg-pink-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
                <div className="inline-block px-4 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-bold tracking-widest uppercase">Join Our Team</div>
                <h2 className="font-serif text-5xl text-stone-950 leading-tight">Now Hiring Compassionate Caregivers.</h2>
                <p className="text-xl text-stone-600 leading-relaxed">We are looking for dedicated individuals to join our team in Port Orchard, Bremerton, Silverdale, Poulsbo, and Bainbridge Island.</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-pink-100/50">
                        <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                          <Users className="w-6 h-6 text-pink-600" />
                        </div>
                        <h4 className="font-bold text-xl mb-4 text-stone-900">Your Impact</h4>
                        <ul className="space-y-3 text-stone-600">
                            <li className="flex items-start gap-2 italic"> <span className="text-pink-600">★</span> Assist with daily living</li>
                            <li className="flex items-start gap-2 italic"> <span className="text-pink-600">★</span> Provide companionship</li>
                            <li className="flex items-start gap-2 italic"> <span className="text-pink-600">★</span> Help with mobility & meals</li>
                            <li className="flex items-start gap-2 italic"> <span className="text-pink-600">★</span> Maintain client safety</li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-pink-100/50">
                        <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                          <ClipboardList className="w-6 h-6 text-pink-600" />
                        </div>
                        <h4 className="font-bold text-xl mb-4 text-stone-900">Our Requirements</h4>
                        <ul className="space-y-3 text-stone-600">
                            <li className="flex items-start gap-2 italic"> <span className="text-pink-600">★</span> Compassionate heart</li>
                            <li className="flex items-start gap-2 italic"> <span className="text-pink-600">★</span> Dependable & punctual</li>
                            <li className="flex items-start gap-2 italic"> <span className="text-pink-600">★</span> Experience preferred</li>
                            <li className="flex items-start gap-2 italic"> <span className="text-pink-600">★</span> CNA/HCA certificates +</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-stone-950 p-10 rounded-[40px] text-white overflow-hidden relative border border-stone-800 shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] -mr-48 -mt-48 transition-opacity duration-1000 group-hover:bg-pink-500/30"></div>
                    <h4 className="font-serif text-2xl mb-10 border-b border-stone-800 pb-4 relative z-10">Caregiver Benefits:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                        <div className="flex items-center gap-5 group/benefit">
                            <div className="relative">
                                <div className="absolute inset-0 bg-emerald-500 rounded-2xl blur-lg opacity-0 group-hover/benefit:opacity-40 transition-opacity"></div>
                                <div className="bg-emerald-500 group-hover/benefit:bg-emerald-400 p-4 rounded-2xl transition-all shadow-lg shadow-emerald-500/20 group-hover/benefit:scale-110 relative z-10"><DollarSign className="w-6 h-6 text-white" /></div>
                            </div>
                            <span className="font-bold text-lg group-hover/benefit:text-emerald-300 transition-colors">Competitive Pay</span>
                        </div>
                        <div className="flex items-center gap-5 group/benefit">
                            <div className="relative">
                                <div className="absolute inset-0 bg-amber-500 rounded-2xl blur-lg opacity-0 group-hover/benefit:opacity-40 transition-opacity"></div>
                                <div className="bg-amber-500 group-hover/benefit:bg-amber-400 p-4 rounded-2xl transition-all shadow-lg shadow-amber-500/20 group-hover/benefit:scale-110 relative z-10"><Clock className="w-6 h-6 text-white" /></div>
                            </div>
                            <span className="font-bold text-lg group-hover/benefit:text-amber-300 transition-colors">Flexible Schedules</span>
                        </div>
                        <div className="flex items-center gap-5 group/benefit">
                            <div className="relative">
                                <div className="absolute inset-0 bg-sky-500 rounded-2xl blur-lg opacity-0 group-hover/benefit:opacity-40 transition-opacity"></div>
                                <div className="bg-sky-500 group-hover/benefit:bg-sky-400 p-4 rounded-2xl transition-all shadow-lg shadow-sky-500/20 group-hover/benefit:scale-110 relative z-10"><Users className="w-6 h-6 text-white" /></div>
                            </div>
                            <span className="font-bold text-lg group-hover/benefit:text-sky-300 transition-colors">Supportive Culture</span>
                        </div>
                        <div className="flex items-center gap-5 group/benefit">
                            <div className="relative">
                                <div className="absolute inset-0 bg-rose-500 rounded-2xl blur-lg opacity-0 group-hover/benefit:opacity-40 transition-opacity"></div>
                                <div className="bg-rose-500 group-hover/benefit:bg-rose-400 p-4 rounded-2xl transition-all shadow-lg shadow-rose-500/20 group-hover/benefit:scale-110 relative z-10"><TrendingUp className="w-6 h-6 text-white" /></div>
                            </div>
                            <span className="font-bold text-lg group-hover/benefit:text-rose-300 transition-colors">Growth Paths</span>
                        </div>
                    </div>
                </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[40px] shadow-2xl border border-stone-100 lg:sticky lg:top-32"
            >
                <h3 className="font-serif text-3xl mb-8">Career Application</h3>
                <form className="space-y-6">
                    <div className="space-y-2 text-stone-400">
                      <label className="text-sm font-bold uppercase tracking-widest text-stone-500 pl-1">Your Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full p-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-stone-500 pl-1">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full p-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-stone-500 pl-1">Resume / CV</label>
                      <input type="file" className="w-full p-4 bg-stone-50 border border-stone-200 rounded-2xl file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100" />
                    </div>
                    <button className="w-full bg-pink-700 text-white p-5 rounded-2xl font-bold text-lg hover:bg-pink-800 shadow-lg shadow-pink-600/20 active:scale-95 transition-all">
                      Submit My Application
                    </button>
                    <p className="text-center text-stone-400 text-sm">We typically respond within 2-3 business days.</p>
                </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <div className="inline-block px-4 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4">Our Services</div>
            <h2 className="font-serif text-5xl md:text-6xl text-stone-950 mb-6">Comprehensive Home Care.</h2>
            <p className="text-xl text-stone-600 leading-relaxed font-light">Customized non-medical support tailored to your unique needs and lifestyle.</p>
          </div>
          <div className="columns-2 md:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8">
            {SERVICES.map((s, idx) => {
                const Icon = serviceIcons[s.name] || ClipboardList;
                return (
                    <motion.div 
                      key={s.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="break-inside-avoid group bg-stone-50 rounded-[32px] md:rounded-[40px] border border-stone-100/50 hover:bg-pink-600 hover:border-pink-600 transition-all duration-500 cursor-default overflow-hidden shadow-sm hover:shadow-xl"
                    >
                        <div className="h-32 md:h-48 overflow-hidden relative">
                          <img 
                            src={s.image} 
                            alt={s.name} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div className="p-6 md:p-10 -mt-8 relative z-10 bg-inherit group-hover:bg-transparent rounded-t-[32px] md:rounded-t-[40px]">
                          <motion.div 
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                              duration: 3 + Math.random(),
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-sm group-hover:bg-pink-500 transition-colors"
                          >
                            <Icon className='w-6 h-6 md:w-8 md:h-8 text-pink-600 group-hover:text-white transition-colors'/>
                          </motion.div>
                          <h3 className="font-serif text-lg md:text-2xl mb-2 md:mb-4 group-hover:text-white transition-colors">{s.name}</h3>
                          <p className="text-stone-600 text-sm md:text-base leading-relaxed group-hover:text-pink-50 transition-colors line-clamp-3 md:line-clamp-none">{s.description}</p>
                        </div>
                    </motion.div>
                )
            })}
          </div>
          <div className="mt-20 text-center">
            <p className="text-stone-500 mb-8 max-w-2xl mx-auto italic font-light">"Kindness is the language which the deaf can hear and the blind can see."</p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-stone-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-stone-800 transition-all">
              Schedule Your Free Consultation
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-stone-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/backimg.jpeg" 
            alt="Faded home background" 
            className="w-full h-full object-cover opacity-[0.07]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-transparent to-stone-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="lg:col-span-12 xl:col-span-5 space-y-8 md:space-y-10 text-center xl:text-left">
              <div>
                <div className="inline-block px-4 py-1 bg-stone-200 text-stone-600 rounded-full text-xs font-bold tracking-widest uppercase mb-4">Contact Us</div>
                <h2 className="font-serif text-4xl md:text-6xl text-stone-950 mb-6 md:mb-8 leading-tight md:leading-[1.1]">Let's Connect and <span className="text-pink-600">Heal.</span></h2>
                <p className="text-lg md:text-2xl text-stone-600 leading-relaxed font-light">Have questions, or want to schedule a free consultation? We're here to help you get the support your loved ones deserve.</p>
              </div>
              
              <div className="grid sm:grid-cols-2 xl:grid-cols-1 gap-4 md:gap-8">
                <motion.a 
                  whileHover={{ x: 10 }}
                  href="mailto:kindcompassionatellc@gmail.com" 
                  className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-2xl md:rounded-3xl border border-stone-200 group h-full"
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-stone-900 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-pink-600 transition-colors">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-400 mb-0.5 md:mb-1">Send an Email</p>
                    <p className="text-sm md:text-lg font-medium text-stone-900 break-all md:break-normal">kindcompassionatellc@gmail.com</p>
                  </div>
                </motion.a>
                
                <motion.a 
                  whileHover={{ x: 10 }}
                  href="tel:+14259671892" 
                  className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-2xl md:rounded-3xl border border-stone-200 group h-full"
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-stone-900 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-amber-500 transition-colors">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-400 mb-0.5 md:mb-1">Call Our Office</p>
                    <p className="text-sm md:text-lg font-medium text-stone-900">(425) 967-1892</p>
                  </div>
                </motion.a>
              </div>
            </div>
            
            <div className="lg:col-span-12 xl:col-span-7 relative w-full overflow-visible">
              <div className="absolute -inset-4 bg-pink-100 rounded-[40px] md:rounded-[50px] blur-3xl -z-10 opacity-50 group-hover:opacity-100 transition-all duration-1000"></div>
              <div className="bg-white p-6 md:p-12 rounded-[40px] md:rounded-[50px] shadow-2xl border border-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-16 -mr-16 w-48 h-48 bg-pink-50 rounded-full opacity-40"></div>
                <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-32 h-32 bg-amber-50 rounded-full opacity-40"></div>
                
                <h3 className="font-serif text-2xl md:text-3xl mb-6 md:mb-10 relative z-10 text-center md:text-left">Send Us a Message</h3>
                <form className="space-y-4 md:space-y-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-1 md:space-y-2">
                        <label className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-stone-400 pl-1">Full Name</label>
                        <input type="text" placeholder="Jane Smith" className="w-full p-3 md:p-4 bg-stone-50 border border-stone-100 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none transition-all text-sm md:text-base" />
                      </div>
                      <div className="space-y-1 md:space-y-2">
                        <label className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-stone-400 pl-1">Email Address</label>
                        <input type="email" placeholder="jane@email.com" className="w-full p-3 md:p-4 bg-stone-50 border border-stone-100 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none transition-all text-sm md:text-base" />
                      </div>
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <label className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-stone-400 pl-1">Your Message</label>
                      <textarea placeholder="How can we help you and your family?" rows={4} className="w-full p-3 md:p-4 bg-stone-50 border border-stone-100 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none transition-all resize-none text-sm md:text-base"></textarea>
                    </div>
                    <button className="w-full bg-pink-700 text-white p-4 md:p-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-pink-800 shadow-xl shadow-pink-600/20 active:scale-[0.98] transition-all">
                      Deliver Message
                    </button>
                    <p className="text-center text-stone-400 text-xs md:text-sm italic">We typically respond to all inquiries within 24 hours.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-24 bg-stone-950 text-stone-400 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            {/* Brand Section */}
            <div className="space-y-8">
              <div className="w-20 h-20 rounded-[35%] overflow-hidden border border-stone-800 group hover:border-pink-500 transition-all duration-500">
                <img 
                  src="/assets/logo2.png" 
                  alt="Kindness and Compassionate Logo" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <h4 className="font-serif text-2xl text-white leading-tight">Kindness & Compassionate LLC</h4>
                <p className="text-stone-500 font-light leading-relaxed">
                  Providing professional, non-medical in-home care that empowers dignity and brings peace of mind to families.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-8">
              <h5 className="text-white font-bold uppercase tracking-widest text-xs">Navigation</h5>
              <nav className="flex flex-col gap-4 font-medium text-sm">
                <a href="#" className="hover:text-pink-500 transition-colors">Home</a>
                <a href="#about" className="hover:text-pink-500 transition-colors">Our Story</a>
                <a href="#services" className="hover:text-pink-500 transition-colors">Services</a>
                <a href="#careers" className="hover:text-pink-500 transition-colors">Join Team</a>
                <a href="#contact" className="hover:text-pink-500 transition-colors">Contact Us</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}