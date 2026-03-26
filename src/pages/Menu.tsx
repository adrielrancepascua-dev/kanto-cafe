import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MENU_DATA: Record<string, {name: string, price: string, desc: string}[]> = {
  meals: [
    { name: 'Ultimate Breakfast', price: '₱299', desc: 'Signature meal with everything you love.' },
    { name: 'Beef Salpicao', price: '₱200', desc: 'Garlicky beef sirloin with rice.' },
    { name: 'Tapsilog (Carabeef)', price: '₱200', desc: 'Classic hit, cured perfectly.' },
    { name: 'Pork Katsudon', price: '₱200', desc: 'Crispy cutlet in sweet savory egg sauce.' },
  ],
  pasta_snacks: [
    { name: 'Carbonara', price: '₱200', desc: 'Creamy white sauce with bacon.' },
    { name: 'Creamy Pesto Chicken', price: '₱220', desc: 'Rich pesto topped with chicken.' },
    { name: 'Cheesy Beef Nachos', price: '₱180', desc: 'Massive platter to share with friends.' },
    { name: 'Pizza Croffles', price: '₱180', desc: 'Savory cheesy pastry hybrid.' },
  ],
  drinks: [
    { name: 'Spanish Latte', price: '₱135/155', desc: 'Sweet, creamy, rich espresso base.' },
    { name: 'Java Chip Frappe', price: '₱150', desc: 'Ice blended mocha with chocolate chips.' },
    { name: 'Pink Venom Smoothie', price: '₱170', desc: 'Fruity vibrant smoothie.' },
    { name: 'Mango Matcha', price: '₱130', desc: 'Layered iced non-coffee perfection.' },
  ],
  party: [
    { name: 'Pancit Canton Bilao', price: 'Ask us', desc: 'Small, Medium, Large to feed the whole gang.' },
    { name: 'Beef Caldereta Tray', price: 'Ask us', desc: 'Good for 12-15 pax. Order in advance!' },
    { name: 'Sushi Platter', price: 'Ask us', desc: 'Perfect party centerpiece.' },
    { name: 'Chicken Cordon Bleu Tray', price: 'Ask us', desc: 'Golden fried chicken and cheese.' },
  ]
};

export default function Menu() {
  const searchParams = new URLSearchParams(window.location.search);
  const initialTab = searchParams.get('type') === 'drinks' ? 'drinks' : searchParams.get('type') === 'food' ? 'meals' : 'meals';
  const [activeTab, setActiveTab] = useState(initialTab);

  const tabs = [
    { id: 'meals', label: 'Food' },
    { id: 'drinks', label: 'Drinks & Coffee' },
  ];

  return (
    <div className="bg-brand-light min-h-screen pt-28 pb-20 font-sans">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h1 className="font-display text-5xl md:text-6xl font-black text-brand-dark uppercase tracking-tight mb-4">Our Menu</h1>
        <p className="text-xl text-brand-brown font-medium max-w-2xl mx-auto">
          Huge portions, bold flavors, endless caffeine. Pick your poison.
        </p>
      </div>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto px-4 mb-12 flex flex-wrap justify-center gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-xl font-bold uppercase tracking-wide border-2 border-brand-dark transition-all ${
              activeTab === tab.id 
                ? 'bg-brand-primary text-white shadow-[4px_4px_0_0_#431407] -translate-y-1 -translate-x-1' 
                : 'bg-white text-brand-dark hover:bg-brand-beige shadow-sm'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {MENU_DATA[activeTab].map((item: any, index: number) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl border-2 border-brand-dark shadow-brutal hover:shadow-brutal-hover hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="font-display text-2xl font-bold text-brand-dark uppercase leading-tight">{item.name}</h3>
                    <span className="bg-brand-accent text-brand-dark px-3 py-1 rounded-lg font-black text-sm whitespace-nowrap border border-brand-dark">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-brand-brown/80 font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        <div className="mt-16 bg-brand-beige border-2 border-brand-dark p-8 rounded-2xl text-center shadow-[6px_6px_0_0_#EA580C]">
            <h4 className="font-display text-2xl font-black uppercase text-brand-dark mb-2">Want the full list?</h4>
            <p className="text-brand-brown font-medium mb-4">We have dozens of options in-store! From specialty sodas to 15+ different rice bowls.</p>
            <p className="bg-white inline-block px-4 py-2 font-bold text-brand-dark border-2 border-brand-dark rounded-xl">Just pull up and check our in-store menu cards.</p>
        </div>
      </div>
    </div>
  );
}
