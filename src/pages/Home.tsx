import Hero from '../components/Hero';
import { Users, Wifi, Clock, Star, Gift, Utensils, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const experiences = [
    {
      icon: <Users className="w-8 h-8 text-brand-primary" />,
      title: "Barkada Core",
      desc: "Spacious seating designed for groups. Laugh, eat, and stay as long as you want."
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-accent" />,
      title: "Late Night Hangs",
      desc: "Open from 9 AM all the way to 12 Midnight for your late-night food & coffee cravings."
    },
    {
      icon: <Wifi className="w-8 h-8 text-brand-primary" />,
      title: "Study & Work",
      desc: "Free speedy WiFi, cozy corners on our second floor, and unlimited caffeine."
    },
    {
      icon: <Star className="w-8 h-8 text-brand-accent" />,
      title: "VIP Room",
      desc: "Need privacy? Book our conference room for professional meetings or private parties."
    }
  ];

  const bestSellers = [
    { name: "Spanish Latte", type: "Drink", img: "https://images.unsplash.com/photo-1560931560-619058b73a34?auto=format&fit=crop&w=600&q=80" },
    { name: "Java Chip Frappe", type: "Frappe", img: "https://images.unsplash.com/photo-1530373239216-42518e6b4063?auto=format&fit=crop&w=600&q=80" },
    { name: "Beef Salpicao", type: "Meal", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80" },
    { name: "Flavoured Croffles", type: "Pastry", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80" }
  ];

  return (
    <div className="bg-brand-light font-sans">
      <Hero />

      {/* Experience Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tight">Why People Come Here</h2>
          <p className="mt-4 text-brand-brown font-medium text-lg">This is where you go with friends.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl border-2 border-brand-dark shadow-brutal transition-transform"
            >
              <div className="bg-brand-beige w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-brand-dark">
                {exp.icon}
              </div>
              <h3 className="font-display text-2xl font-bold text-brand-dark mb-3">{exp.title}</h3>
              <p className="text-brand-brown/80 leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Menu / Best Sellers */}
      <section className="py-24 bg-brand-dark text-brand-light px-4 border-y-4 border-brand-primary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Crowd Favorites</h2>
              <p className="mt-4 text-brand-accent font-medium text-lg">You can never go wrong with these Bestsellers.</p>
            </div>
            <Link to="/menu" className="bg-brand-primary text-white font-bold py-3 px-8 rounded-xl border-2 border-transparent hover:border-white transition-all shadow-[4px_4px_0_0_#FFF]">
              See Full Menu
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="group rounded-2xl overflow-hidden bg-brand-brown/40 border border-brand-brown relative"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-brand-accent text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {item.type}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-xl font-bold text-white mb-2">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Party Trays Emphasis - SALES FEATURE */}
      <section className="py-24 px-4 bg-brand-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
          <Gift className="w-64 h-64 text-white" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center bg-brand-dark p-12 md:p-16 rounded-3xl shadow-[12px_12px_0_0_#F59E0B] border-4 border-brand-dark">
          <h2 className="font-display text-4xl md:text-6xl font-black text-white uppercase mb-6 leading-tight">
            Perfect for <br/><span className="text-brand-accent">Groups & Events</span>
          </h2>
          <p className="text-xl text-brand-light opacity-90 max-w-2xl mx-auto mb-10">
            Make your celebrations hassle-free! Our Party Trays are good for 12-15 pax. Choose from savory classics like Beef Caldereta, Crispy Kare-Kare, and massive Pancit Bilaos.
          </p>
          <Link 
            to="/party-trays"
            className="inline-block bg-brand-accent text-brand-dark px-10 py-5 rounded-2xl text-xl font-black uppercase tracking-wide hover:bg-white transition-colors duration-300 shadow-[6px_6px_0_0_#FFF]"
          >
            Book Your Tray Now
          </Link>
        </div>
      </section>

      {/* Location / CTA Banner */}
      <section className="py-24 bg-brand-beige px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-black text-brand-dark uppercase mb-8">Pull Up! We're Waiting For You.</h2>
          <div className="bg-white p-8 rounded-2xl shadow-brutal border-2 border-brand-dark inline-block text-left mb-8">
            <p className="text-brand-dark font-bold text-xl mb-4 flex items-center gap-2">
              <span className="bg-brand-primary p-2 rounded-full text-white"><Utensils className="w-5 h-5"/></span>
              Thirdy & Julios Commercial Building
            </p>
            <p className="text-brand-brown">Rizal Avenue, Poblacion, Dagupan City</p>
            <p className="text-brand-brown text-sm mt-1 mb-6">Just after Manzon Bridge, across Pangasinan Doctors Hospital.</p>
            <div className="h-px w-full bg-brand-beige mb-6"></div>
            <p className="text-brand-dark font-bold">Hours: <span className="text-brand-primary">9 AM - 12 Midnight</span></p>
          </div>
          <div>
            <Link to="/contact" className="text-brand-dark font-bold underline hover:text-brand-primary text-lg flex items-center justify-center gap-2">
              Need Directions? Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
