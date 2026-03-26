import { Outlet, useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-brand-light">
      <Navbar />
      <main className="flex-grow pt-20 pb-20 md:pb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      
      {/* Floating Bottom Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white p-3 border-t-2 border-brand-dark shadow-brutal flex justify-between gap-2 md:hidden"> 
        <Link to="/menu" className="flex-1 bg-brand-beige border border-brand-dark text-black text-center py-3 rounded-lg font-bold">View Menu</Link> 
        <a href="https://www.foodpanda.ph/" className="flex-1 bg-brand-primary text-white text-center py-3 rounded-lg font-bold shadow-[2px_2px_0_0_#431407]">Order Now</a> 
      </div>

      <Footer />
    </div>
  );
}
