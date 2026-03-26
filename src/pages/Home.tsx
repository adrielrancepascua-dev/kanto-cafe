import Hero from '../components/Hero';
import { Users, Wifi, Clock, Star, Gift, Utensils, ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const quickMenu = [
    { name: "Kanto Latte", type: "Drink", price: "₱140", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80" },
    { name: "Hazelnut Latte", type: "Drink", price: "₱150", img: "https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?auto=format&fit=crop&w=600&q=80" },
    { name: "Cookies & Cream Frappe", type: "Frappe", price: "₱180", img: "https://images.unsplash.com/photo-1572490122747-3968b75bb69c?auto=format&fit=crop&w=600&q=80" },
    { name: "Bangsilog", type: "Meal", price: "₱220", img: "https://images.unsplash.com/photo-1627308595229-7830f5c9100f?auto=format&fit=crop&w=600&q=80" },
    { name: "The Euphoria Burger", type: "Burger", price: "₱260", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80" },
    { name: "Strawberry Shortcake", type: "Dessert", price: "₱230", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80" }
  ];

  const whoIsThisFor = [
    { text: "Barkada hangouts", icon: <Users className="w-8 h-8 text-brand-primary" />, bg: "bg-white" },
    { text: "Study sessions", icon: <Wifi className="w-8 h-8 text-brand-dark" />, bg: "bg-brand-beige" },
    { text: "Late-night cravings", icon: <Clock className="w-8 h-8 text-brand-primary" />, bg: "bg-white" },
    { text: "Casual dates", icon: <Heart className="w-8 h-8 text-brand-dark" />, bg: "bg-brand-beige" }
  ];

  return (
    <div className="bg-brand-light font-sans">
      <Hero />

      {/* Quick Menu Preview */}
      <section className="py-24 bg-brand-dark text-brand-light px-4 border-y-4 border-brand-primary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Best Sellers</h2>
              <p className="mt-4 text-brand-accent font-medium text-lg">Quick preview of our crowd favorites.</p>
            </div>
            <Link to="/menu" className="bg-brand-primary text-white font-bold py-3 px-8 rounded-xl border-2 border-transparent hover:border-white transition-all shadow-[4px_4px_0_0_#FFF]">
              See Full Menu
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickMenu.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="group rounded-2xl overflow-hidden bg-white border-2 border-brand-dark shadow-brutal relative flex flex-col"
              >
                <div className="h-56 overflow-hidden relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-brand-accent text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" /> Best Seller
                  </div>
                </div>
                <div className="p-6 text-center flex-grow flex flex-col">
                  <h3 className="font-display text-xl font-black text-brand-dark mb-2">{item.name}</h3>
                  <div className="text-brand-primary font-black text-lg mb-4">{item.price}</div>
                  <div className="mt-auto">
                    <Link to="/menu" className="block w-full text-center bg-brand-beige border-2 border-brand-dark text-brand-dark py-2 font-bold rounded-lg hover:bg-brand-primary hover:text-white transition-colors">
                      👉 See Full Menu
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tight">Why People Love Kanto Cafe</h2>
          <p className="mt-4 text-brand-brown font-black text-xl bg-brand-accent text-brand-dark inline-block px-4 py-1 rounded-full rotate-2">300+ customers served weekly</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-2xl border-2 border-brand-dark shadow-brutal transition-transform"
          >
            <div className="flex text-brand-accent mb-4">
              <Star className="w-6 h-6 fill-current"/><Star className="w-6 h-6 fill-current"/><Star className="w-6 h-6 fill-current"/><Star className="w-6 h-6 fill-current"/><Star className="w-6 h-6 fill-current"/>
            </div>
            <p className="font-display text-2xl font-bold text-brand-dark italic">"Solid tambayan, sarap ng food, babalik talaga kami!"</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-brand-beige p-8 rounded-2xl border-2 border-brand-dark shadow-brutal transition-transform"
          >
            <div className="flex text-brand-accent mb-4">
              <Star className="w-6 h-6 fill-current"/><Star className="w-6 h-6 fill-current"/><Star className="w-6 h-6 fill-current"/><Star className="w-6 h-6 fill-current"/><Star className="w-6 h-6 fill-current"/>
            </div>
            <p className="font-display text-2xl font-bold text-brand-dark italic">"Perfect for late-night study sessions."</p>
          </motion.div>
        </div>
      </section>

      {/* Who Is This For? */}
      <section className="py-24 bg-brand-primary px-4 border-t-4 border-brand-dark">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black text-white uppercase tracking-tight bg-brand-dark inline-block px-8 py-3 rounded-2xl shadow-[6px_6px_0_0_#F59E0B] -rotate-2">This place is for you if:</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {whoIsThisFor.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className={`${item.bg} p-8 rounded-2xl border-2 border-brand-dark shadow-brutal transition-transform flex flex-col items-center text-center gap-4`}
            >
              <div className="bg-brand-accent w-16 h-16 rounded-xl flex items-center justify-center border-2 border-brand-dark shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-display text-2xl font-black text-brand-dark">{item.text}</h3>
            </motion.div>
          ))}
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
