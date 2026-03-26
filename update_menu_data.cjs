const fs = require('fs');

const menuCode = `import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StarIcon = () => (
  <svg className="w-4 h-4 text-brand-accent inline-block ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-4 h-4 text-red-500 inline-block ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
);

const M_DRINKS = [
  {
    category: "Black Coffee",
    note: "Pour-over selection available - ask our barista.",
    items: [
      { name: "Kapeng Kano", price: "₱100 / ₱110", desc: "Hot / Iced" },
      { name: "Double Espresso", price: "₱110 / ₱120", desc: "Hot / Iced" },
      { name: "Sparkling Coffee", price: "₱120", desc: "Iced" },
      { name: "Black Sunset", price: "₱130", desc: "Iced" },
      { name: "Dirty OJ", price: "₱120", desc: "Iced" },
    ]
  },
  {
    category: "Classic Coffee",
    items: [
      { name: "Vanilla Latte", price: "₱140 / ₱150", desc: "Hot / Iced" },
      { name: "Hazelnut Latte", price: "₱140 / ₱150", desc: "Hot / Iced", bestSeller: true },
      { name: "Mocha Latte", price: "₱140 / ₱150", desc: "Hot / Iced" },
      { name: "White Chocolate Latte", price: "₱140 / ₱150", desc: "Hot / Iced" },
      { name: "Karamel Latte", price: "₱140 / ₱150", desc: "Hot / Iced" },
    ]
  },
  {
    category: "White Coffee",
    items: [
      { name: "Latte", price: "₱120 / ₱130", desc: "Hot / Iced" },
      { name: "Kanto Latte", price: "₱130 / ₱140", desc: "Hot / Iced", bestSeller: true },
      { name: "Kold White", price: "₱130", desc: "Iced only" },
      { name: "Mint Mojito", price: "₱140 / ₱150", desc: "Hot / Iced" },
    ]
  },
  {
    category: "Signature Lattes",
    items: [
      { name: "Caramel White Mocha", price: "₱160 / ₱170", desc: "Hot / Iced" },
      { name: "Cereal Latte", price: "₱180", desc: "Iced only" },
      { name: "Vanilla Bean Caramel CB", price: "₱150", desc: "Iced", isNew: true },
      { name: "Pandan Latte", price: "₱130 / ₱140", desc: "Hot / Iced" },
      { name: "Pink Latte", price: "₱170", desc: "Iced", isNew: true },
      { name: "Dirty Horchata", price: "₱160", desc: "Iced" },
      { name: "Hazelnut Caramel Mocha", price: "₱170 / ₱170", desc: "Hot / Iced", bestSeller: true },
      { name: "Dirty Matcha Latte", price: "₱140 / ₱160", desc: "Hot / Iced" },
    ]
  },
  {
    category: "Frappes",
    items: [
      { name: "Cookies & Cream", price: "₱180 / ₱170", desc: "Coffee / Non-coffee", bestSeller: true },
      { name: "Matcha", price: "₱180 / ₱170", desc: "Coffee / Non-coffee" },
      { name: "Mocha", price: "₱180 / ₱160", desc: "Coffee / Non-coffee" },
      { name: "Salted Karamel", price: "₱180 / ₱160", desc: "Coffee / Non-coffee" },
      { name: "Frappuccino", price: "₱180", desc: "Coffee only" },
      { name: "Frozen Spiced Chai", price: "₱180 / ₱160", desc: "Coffee / Non-coffee" },
      { name: "Strawberry Frappe", price: "₱180 / ₱160", desc: "Coffee / Non-coffee", isNew: true },
    ]
  },
  {
    category: "Non-Coffee",
    items: [
      { name: "Matcha Latte", price: "₱140 / ₱150", desc: "Hot / Iced", bestSeller: true },
      { name: "Horchata", price: "₱150", desc: "Iced" },
      { name: "Chocolate", price: "₱130 / ₱140", desc: "Hot / Iced" },
      { name: "Passionade", price: "₱170", desc: "" },
      { name: "Strawberry Lemonade", price: "₱170", desc: "", isNew: true },
    ]
  },
  {
    category: "Tea-Based Drinks",
    items: [
      { name: "Kanto Citrus Tea", price: "₱130", desc: "", bestSeller: true },
      { name: "Peach Berry Tea", price: "₱140", desc: "", bestSeller: true },
      { name: "Kanto Milktea", price: "₱150", desc: "", bestSeller: true },
      { name: "Cold Foam Strawberry Matcha", price: "₱180", desc: "", isNew: true },
    ]
  },
  {
    category: "Non-Dairy Lattes",
    note: "Add an extra espresso shot (+₱20) or oat milk (+₱30).",
    items: [
      { name: "Chocnut Oat Latte", price: "₱170 / ₱170", desc: "Hot / Iced", bestSeller: true },
      { name: "Oat Latte", price: "₱150 / ₱160", desc: "Hot / Iced" },
      { name: "Kanto Oat Latte", price: "₱160 / ₱170", desc: "Hot / Iced", bestSeller: true },
    ]
  }
];

const M_FOOD = [
  {
    category: "Snacks",
    items: [
      { name: "Beef Nachos", price: "₱180", desc: "" },
      { name: "Potato Wedges", price: "₱160", desc: "" },
      { name: "Cheesy Yangnyeom Chicken", price: "₱220", desc: "", isNew: true },
      { name: "Calamares", price: "₱220", desc: "", bestSeller: true },
      { name: "Mozzarella Sticks", price: "₱190", desc: "" },
      { name: "Fish & Chips", price: "₱220", desc: "", isNew: true },
      { name: "Truffle Parmesan Wedges", price: "₱200", desc: "", isNew: true },
    ]
  },
  {
    category: "Burger & Sandwiches",
    items: [
      { name: "The Classic Burger", price: "₱220", desc: "Beef patty, lettuce, tomato, special sauce" },
      { name: "BBC Burger", price: "₱240", desc: "Bacon, beef patty, cheese" },
      { name: "The Euphoria", price: "₱260", desc: "Glazed onions, secret sauce, cheese", bestSeller: true },
      { name: "Chicken Burger", price: "₱230", desc: "Crispy chicken fillet with coleslaw" },
      { name: "Tuna Melt Sandwich", price: "₱180", desc: "Tuna filling with melted cheese" },
      { name: "Grilled Cheese", price: "₱180", desc: "Classic gooey cheese sandwich" },
      { name: "Habanero Grilled Cheese", price: "₱200", desc: "Spicy kick to the classic grilled cheese" },
    ]
  },
  {
    category: "Rice Meals",
    items: [
      { name: "Bangsilog", price: "₱220", desc: "Comfort food with a twist", bestSeller: true },
      { name: "Longsilog", price: "₱190", desc: "Classic sweet garlic sausage" },
      { name: "Chicken Sisig", price: "₱170", desc: "Sizzling minced chicken with egg" },
      { name: "Chicken Ala King", price: "₱180", desc: "Creamy chicken and veggies", bestSeller: true },
      { name: "Chicken Katsu", price: "₱170", desc: "Crispy chicken cutlet with tonkatsu sauce" },
      { name: "Beef Shawarma Rice", price: "₱170", desc: "Flavorful beef with garlic sauce", bestSeller: true },
      { name: "Chicken Inasal", price: "₱250", desc: "Grilled marinated chicken", isNew: true },
    ]
  },
  {
    category: "Pasta",
    items: [
      { name: "Puttanesca", price: "₱190", desc: "Rich tomato, olive, and caper sauce", bestSeller: true },
      { name: "Tuna Aglio Olio", price: "₱180", desc: "Garlic, oil, tuna flakes (Highly Recommended)", isNew: true },
      { name: "Chicken Alfredo", price: "₱220", desc: "Creamy white sauce with chicken chunks", bestSeller: true },
      { name: "Truffle Pasta", price: "₱250", desc: "Decadent truffle cream sauce", isNew: true },
    ]
  },
  {
    category: "Pizza",
    items: [
      { name: "Pepperoni", price: "₱350", desc: "Classic pepperoni slices and mozzarella" },
      { name: "Supreme", price: "₱390", desc: "Loaded with meat and veggies", bestSeller: true },
      { name: "Four Cheese", price: "₱320", desc: "A blend of rich premium cheeses" },
      { name: "Hawaiian", price: "₱350", desc: "Ham and pineapple classic" },
      { name: "Truffle", price: "₱350", desc: "Earthy truffle flavor on a crispy crust", isNew: true },
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Strawberry Shortcake", price: "₱230", desc: "Light sponge cake with fresh strawberries", bestSeller: true },
      { name: "Triple Dark Pain Au Chocolat", price: "₱180", desc: "Rich dark chocolate layers (Recommended)", isNew: true },
      { name: "Pistachio Pain Au Chocolat", price: "₱200", desc: "Flaky pastry with pistachio flavor", isNew: true },
      { name: "Classic Butter Croissant", price: "₱120", desc: "Flaky, buttery perfection" },
      { name: "White Almond Croissant", price: "₱180", desc: "Topped with sliced almonds and sugar dust" },
      { name: "Kouign Amann", price: "₱130", desc: "Caramelized buttery pastry" },
    ]
  }
];

export default function Menu() {
  const searchParams = new URLSearchParams(window.location.search);
  const typeParam = searchParams.get('type');
  const initialTab = typeParam === 'food' ? 'food' : 'drinks';
  const [activeTab, setActiveTab] = useState(initialTab);

  const tabs = [
    { id: 'drinks', label: 'Drinks & Coffee' },
    { id: 'food', label: 'Food' },
  ];

  const currentData = activeTab === 'drinks' ? M_DRINKS : M_FOOD;

  return (
    <div className="bg-brand-light min-h-screen pt-28 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h1 className="font-display text-5xl md:text-6xl font-black text-brand-dark uppercase tracking-tight mb-4">Our Menu</h1>
        <p className="text-xl text-brand-brown font-medium max-w-2xl mx-auto">
          Crafted drinks and comfort food.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 mb-12 flex flex-wrap justify-center gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={\`px-6 py-3 rounded-xl font-bold uppercase tracking-wide border-2 border-brand-dark transition-all \${
              activeTab === tab.id
                ? 'bg-brand-primary text-white shadow-[4px_4px_0_0_#431407] -translate-y-1 -translate-x-1'
                : 'bg-white text-brand-dark hover:bg-brand-beige shadow-sm'
            }\`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentData.map((section, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border-2 border-brand-dark shadow-brutal flex flex-col h-full hover:shadow-brutal-hover hover:translate-y-1 hover:translate-x-1 transition-all">
                <div className="mb-4 border-b-2 border-brand-dark pb-3">
                  <h2 className="font-display text-2xl font-black text-brand-dark uppercase tracking-tight">
                    {section.category}
                  </h2>
                  {section.note && (
                    <p className="text-xs text-brand-accent mt-1 italic font-semibold">{section.note}</p>
                  )}
                </div>

                <div className="flex flex-col gap-3 flex-grow">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-start border-b border-brand-brown/10 pb-2 last:border-0 last:pb-0 group">
                      <div className="pr-4">
                        <h3 className="font-bold text-base text-brand-dark group-hover:text-brand-accent transition-colors flex items-center flex-wrap gap-1">
                          {item.name} 
                          {item.bestSeller && <StarIcon />}
                          {item.isNew && <HeartIcon />}
                        </h3>
                        {item.desc && <p className="text-xs text-brand-brown/70 leading-snug mt-1">{item.desc}</p>}
                      </div>
                      <span className="font-black text-brand-primary bg-brand-beige px-2 py-1 rounded-md text-xs border-2 border-brand-brown/20 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 text-center">
           <a 
            href="https://www.foodpanda.ph/" 
            target="_blank" rel="noopener noreferrer"
            className="inline-block bg-brand-accent hover:bg-brand-primary text-brand-dark hover:text-white font-black uppercase tracking-widest px-8 py-3 rounded-xl border-2 border-brand-dark shadow-[4px_4px_0_0_#431407] hover:shadow-[2px_2px_0_0_#431407] hover:translate-x-1 hover:translate-y-1 transition-all"
           >
             Order via Foodpanda
           </a>
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/pages/Menu.tsx', menuCode);
console.log('Menu updated!');
