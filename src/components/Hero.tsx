import { Link } from 'react-router-dom';
import { ArrowRight, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative bg-brand-light min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Kanto Café Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-brand-dark/60 mix-blend-multiply" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-accent text-brand-dark font-bold text-sm tracking-wider mb-6 uppercase shadow-brutal animate-bounce">
            Tara Kape! Open Daily 9 AM - 12 MN
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight uppercase relative inline-block">
            Coffee, Meals, and <span className="text-brand-primary">Barkada Hangouts</span><br/> in Dagupan
            <div className="absolute -top-6 -right-10 bg-brand-accent text-brand-dark text-xs font-bold px-3 py-1 rounded-full shadow-brutal rotate-12 hidden md:block">
              🔥 Best Sellers
            </div>
            <div className="absolute -bottom-4 -left-8 bg-brand-light text-brand-dark text-xs font-bold px-3 py-1 rounded-full shadow-brutal -rotate-6 hidden md:block">
              ⭐ Crowd Favorites
            </div>
          </h1>
          <p className="text-xl text-brand-light/90 mb-10 max-w-2xl mx-auto font-medium">
            Open until midnight • Perfect for study, dates, and late-night cravings
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/menu"
              className="group flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-brand-dark transition-all shadow-brutal hover:shadow-brutal-hover hover:translate-y-1 hover:translate-x-1"
            >
              <Coffee className="w-5 h-5" />
              View Menu
            </Link>
            <a 
              href="https://www.foodpanda.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-brand-accent text-brand-dark px-8 py-4 rounded-xl text-lg font-bold hover:bg-brand-light transition-all shadow-brutal hover:shadow-brutal-hover hover:translate-y-1 hover:translate-x-1"
            >
              Order Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
