import { useState } from 'react';

const MENU_CATEGORIES = [
  { id: 'coffee', name: 'Coffee & Tea' },
  { id: 'non-coffee', name: 'Non-Coffee' },
  { id: 'pastries', name: 'Pastries & Brownies' },
  { id: 'cakes', name: 'Mini Cakes' },
  { id: 'custom-cakes', name: 'Custom Cakes' },
  { id: 'meals', name: 'Breakfast & Light Meals' },
];

const MENU_ITEMS = {
  coffee: [
    { name: 'Classic Hojicha Latte', price: '₱160', description: 'Creamy roasted Japanese green tea latte. A local favorite.', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80' },
    { name: 'Spanish Latte', price: '₱150', description: 'Sweet and creamy espresso-based drink with condensed milk.', image: 'https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?auto=format&fit=crop&w=400&q=80' },
    { name: 'Americano', price: '₱110', description: 'Bold and classic espresso with hot water.', image: 'https://images.unsplash.com/photo-1551024601-5629436bb5c1?auto=format&fit=crop&w=400&q=80' },
    { name: 'Caramel Macchiato', price: '₱160', description: 'Espresso with vanilla syrup, milk, and caramel drizzle.', image: 'https://images.unsplash.com/photo-1485808191679-5f8c7c835569?auto=format&fit=crop&w=400&q=80' },
  ],
  'non-coffee': [
    { name: 'Matcha Latte', price: '₱150', description: 'Premium grade matcha with steamed milk.', image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=400&q=80' },
    { name: 'Strawberry Refresher', price: '₱130', description: 'Sparkling strawberry drink with real fruit bits.', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80' },
    { name: 'Chocolate Ice Blended', price: '₱165', description: 'Rich chocolate blended with ice and topped with whipped cream.', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80' },
  ],
  pastries: [
    { name: 'Ham & Cheese Toastie', price: '₱185', description: 'Grilled sandwich with premium ham and melty cheese.', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80' },
    { name: 'Fudgy Brownie', price: '₱85', description: 'Decadent chocolate brownie with a crackly top.', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80' },
  ],
  cakes: [
    { name: 'Carrot Walnut Cake', price: '₱180', description: '3" mini cake with cream cheese frosting.', image: 'https://images.unsplash.com/photo-1509460592788-5136815332f1?auto=format&fit=crop&w=400&q=80' },
    { name: 'Blueberry Cheesecake', price: '₱200', description: 'Rich and creamy cheesecake with blueberry topping.', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80' },
    { name: 'Red Velvet', price: '₱175', description: 'Classic red velvet mini cake with cream cheese icing.', image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=400&q=80' },
    { name: 'Burnt Basque', price: '₱190', description: 'Crustless cheesecake with a burnt exterior and creamy center.', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80' },
  ],
  'custom-cakes': [
     { name: 'Customized Cake', price: 'Starts at ₱1,200', description: 'Bespoke cakes for weddings, birthdays, and special events. Pre-order required.', image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=400&q=80' },
  ],
  meals: [
    { name: 'Creamy Pesto Pasta', price: '₱220', description: 'Al dente pasta tossed in homemade basil pesto sauce.', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=400&q=80' },
    { name: 'All-Day Breakfast Set', price: '₱250', description: 'Classic silog meals or pancakes served with coffee.', image: 'https://images.unsplash.com/photo-1533089862017-7c392454a86d?auto=format&fit=crop&w=400&q=80' },
  ]
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('coffee');

  return (
    <div className="bg-brand-light min-h-screen pb-20">
      {/* Header */}
      <div className="bg-brand-brown py-16 text-center text-white">
        <h1 className="font-serif text-4xl font-bold mb-4">Our Menu</h1>
        <p className="opacity-90 max-w-2xl mx-auto px-4">
          Discover our selection of handcrafted beverages, comfort food, and sweet treats.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Category Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-2 flex flex-wrap justify-center gap-2 mb-12 overflow-x-auto">
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-brand-brown text-white shadow-md'
                  : 'text-brand-dark hover:bg-brand-beige'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {MENU_ITEMS[activeCategory as keyof typeof MENU_ITEMS].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex gap-6 items-start border border-brand-beige/30">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-24 h-24 rounded-lg object-cover flex-shrink-0 bg-brand-beige"
              />
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-brand-dark">{item.name}</h3>
                  <span className="font-bold text-brand-brown bg-brand-beige/30 px-3 py-1 rounded-full text-sm whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-brand-dark/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 text-center text-brand-dark/60 text-sm">
          <p>* Prices and availability are subject to change. Please ask our staff for allergen information.</p>
        </div>
      </div>
    </div>
  );
}
