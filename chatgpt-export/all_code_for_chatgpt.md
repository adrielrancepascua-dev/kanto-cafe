# Cafe BrewsCo Codebase

## index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet">
    <title>Café BrewsCo | San Carlos City</title>
    <meta name="description" content="Café BrewsCo in San Carlos City, Pangasinan. Brewing Happiness in a Cup. Enjoy specialty coffee, full meals, and party trays in our cozy solar-powered café. Open daily 9AM-12MN.">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

## tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#FFFDF9',   // cream/off-white
          beige: '#F5F5DC',   // cream/off-white alternative
          primary: '#8B4513', // Warm espresso brown
          accent: '#E68A00',  // caramel orange
          brown: '#8B4513',   // Warm espresso brown
          dark: '#000000',    // black accents
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '6px 6px 0px 0px rgba(67, 20, 7, 1)', // for high-energy cards
        'brutal-hover': '2px 2px 0px 0px rgba(67, 20, 7, 1)',
      }
    },
  },
  plugins: [],
};

```

## src/App.tsx
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import PartyTrays from './pages/PartyTrays';
import { useEffect } from 'react';

function App() {
  // Protection against casual copying
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'u')
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    // Console warning for developers
    console.log(
      '%cStop!',
      'color: red; font-size: 50px; font-weight: bold; text-shadow: 2px 2px black;'
    );
    console.log(
      '%cThis is a browser feature intended for developers. If someone told you to copy-paste something here to enable a feature or "hack" someone\'s account, it is a scam and will give them access to your account.',
      'font-size: 20px;'
    );

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='menu' element={<Menu />} />
          <Route path='party-trays' element={<PartyTrays />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```

## src/main.tsx
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

## src/index.css
```css
@import "tailwindcss";
@config "../tailwind.config.js";

@layer base {
  body {
    @apply bg-brand-light text-brand-dark font-sans;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-display;
  }
}

```

## src/components/Hero.tsx
```tsx
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
          <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight uppercase">
            Kanto Café <span className="text-brand-primary">- Crafted drinks</span><br/> and comfort food
          </h1>
          <p className="text-xl text-brand-light/90 mb-10 max-w-2xl mx-auto font-medium">
            Barkada nights, study sessions, and late-night cravings. 
            Come for the coffee, stay for the high-energy, cozy vibes in Dagupan.
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

```

## src/components/Navbar.tsx
```tsx
import { Link, NavLink } from 'react-router-dom';
import { Menu as MenuIcon, X, Coffee } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Drinks', href: '/menu?type=drinks' },
    { name: 'Food', href: '/menu?type=food' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-brand-light/95 flex backdrop-blur-md fixed w-full z-50 shadow-sm border-b-2 border-brand-dark font-sans h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-brand-primary p-2 rounded-lg shadow-[3px_3px_0_0_#431407] group-hover:shadow-[1px_1px_0_0_#431407] group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all border border-brand-dark">
            <Coffee className="h-6 w-6 text-white" />
          </div>
          <span className="font-display text-2xl font-black text-brand-dark uppercase tracking-tight">Kanto Cafe</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-bold uppercase tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-brand-primary border-b-2 border-brand-primary' : 'text-brand-dark hover:text-brand-primary'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <a 
            href="https://www.foodpanda.ph/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-dark text-white px-6 py-2 rounded-lg border-2 border-brand-dark hover:bg-brand-primary hover:border-brand-primary transition-all text-sm font-bold uppercase shadow-[4px_4px_0_0_#EA580C]"
          >
            Order Delivery
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-brand-dark p-2 bg-brand-beige border-2 border-brand-dark rounded-lg shadow-[3px_3px_0_0_#431407]"
          >
            {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-brand-light border-b-4 border-brand-dark shadow-xl md:hidden px-4 py-6 flex flex-col gap-4">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl border-2 border-brand-dark text-center font-bold uppercase ${
                  isActive ? 'bg-brand-primary text-white shadow-brutal' : 'bg-white text-brand-dark hover:bg-brand-beige shadow-sm'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <a 
            href="https://www.foodpanda.ph/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-center mt-4 bg-brand-dark text-brand-accent border-2 border-brand-dark px-4 py-4 rounded-xl font-black uppercase text-lg"
          >
            Order Delivery Now
          </a>
        </div>
      )}
    </nav>
  );
}

```

## src/components/Footer.tsx
```tsx
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand & About */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-brand-beige">Kanto Cafe</h3>
            <p className="text-brand-beige/80 mb-6 leading-relaxed">
              Brewing Happiness in a Cup. Love is brewing at Kanto Cafe – come for the coffee, stay for the cozy vibes.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/kantocafe.ph/" target="_blank" rel="noopener noreferrer" className="text-brand-beige/80 hover:text-white transition-colors">
                <span className="font-bold">IG</span>
              </a>
              <a href="https://www.facebook.com/KantoCafe/" target="_blank" rel="noopener noreferrer" className="text-brand-beige/80 hover:text-white transition-colors">
                 <span className="font-bold">FB</span>
              </a>
            </div>
          </div>

          {/* Quick Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-brand-beige">Visit Us</h4>
            <ul className="space-y-4 text-brand-beige/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Thirdy & Julios Commercial Building<br/>Rizal Avenue, Poblacion, Dagupan City</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Daily: 9:00 AM – 12:00 MN</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>0928-794-5998</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-brand-beige">Mobile Coffee Bar</h4>
            <p className="text-brand-beige/80 mb-4">
              We offer a mobile coffee bar and party trays for your events! Send us a message to book.
            </p>
            <div className="mt-8 pt-6 border-t border-brand-beige/10">
              <p className="text-sm text-brand-beige/60">We accept cashless payments:</p>
              <p className="text-brand-beige/80 font-medium">Cash • GCash • Credit/Debit Cards</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-brand-beige/10 mt-12 pt-8 text-center text-brand-beige/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Kanto Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

```

## src/pages/Home.tsx
```tsx
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

```

## src/pages/Menu.tsx
```tsx
import { useState } from 'react';
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

```

## src/pages/About.tsx
```tsx
export default function About() {
  return (
    <div className="bg-brand-light min-h-screen">
      {/* Header */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="About Kanto Cafe" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/50" />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="font-serif text-5xl font-bold text-white mb-6">Our Story</h1>
          <p className="text-brand-light text-lg opacity-90">Brewing Happiness in a Cup in the heart of Dagupan.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-brand-dark text-brand-dark/80 mx-auto">
          <h2>More Than Just a Coffee Shop</h2>
          <p>
            <strong>Kanto Cafe</strong> started in 2024 and has quickly become a beloved hangout spot in 
            Dagupan City. Located in the Thirdy & Julios Commercial Building, we offer a sanctuary where friends 
            can gather for barkada nights, students can focus on study sessions, and families can enjoy warm moments together.
          </p>
          <p>
            We pride ourselves on being a versatile space. Our "spacious aesthetic second floor" provides the perfect 
            ambiance for any occasion, complete with a VIP conference room for professional meetings.
          </p>
          
          <div className="my-12 grid grid-cols-2 gap-4">
             <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80" alt="Coffee pouring" className="rounded-lg shadow-md" />
             <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=600&q=80" alt="Cafe interior" className="rounded-lg shadow-md mt-8" />
          </div>

          <h2>Sustainable & Extensive</h2>
          <p>
             We are proud to operate with <strong>solar-powered operations</strong>, contributing to a greener future while serving you. 
             Our menu is extensive, ranging from our signature coffee and non-coffee lattes to full rice meals, pasta, 
             and party trays.
          </p>
          <p>
            Whether you are here for our "Ultimate Breakfast", a refreshing "Pink Venom" smoothie, or planning an event 
            with our mobile coffee bar, our mission is simple: <strong>Brewing Happiness in a Cup.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

```

## src/pages/Contact.tsx
```tsx
import { MapPin, Mail, Clock, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-brand-light min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-center text-brand-dark mb-4">Get in Touch</h1>
        <p className="text-center text-brand-dark/70 mb-16 max-w-2xl mx-auto">
          We'd love to hear from you. Whether you have a question about our menu, want to book a party tray, or need our mobile coffee bar out for an event!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-sm h-full">
            <h2 className="font-serif text-2xl font-bold text-brand-dark mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-beige/50 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-brand-brown" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">Visit Us</h3>
                  <p className="text-brand-dark/70">Thirdy & Julios Commercial Building<br/>Rizal Avenue, Poblacion</p>
                  <p className="text-sm text-brand-dark/50 mt-1">Dagupan City, Pangasinan (across Pangasinan Doctors Hospital)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-beige/50 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-brand-brown" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">Business Hours</h3>
                  <p className="text-brand-dark/70">Open Daily: 9:00 AM – 12:00 MN</p>
                  <p className="text-sm text-brand-dark/50 mt-1">Dine in, Takeout, & Delivery</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-beige/50 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-brand-brown" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">Call Us</h3>
                  <p className="text-brand-dark/70">0928-794-5998</p>
                  <p className="text-brand-dark/70">0928-974-5998 or 0908-161-7838</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-beige/50 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-brand-brown" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">Email Us</h3>
                  <p className="text-brand-dark/70">hello@kantocafe.ph</p>
                </div>
              </div>
              
              <div className="pt-8 border-t border-brand-beige/30">
                <h3 className="font-bold text-brand-dark mb-2">Delivery & Orders</h3>
                <p className="text-brand-dark/70 mb-4">Available on FoodPanda, GrabFood, Undago, Woi and Click.</p>
                <div className="flex gap-2">
                  <a href="#" className="px-4 py-2 bg-pink-500 text-white rounded-lg text-sm font-bold shadow-sm hover:opacity-90">FoodPanda</a>
                  <a href="#" className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-bold shadow-sm hover:opacity-90">GrabFood</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
             <h2 className="font-serif text-2xl font-bold text-brand-dark mb-6">Send us a Message</h2>
             <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1">Name</label>
                   <input type="text" id="name" className="w-full px-4 py-2 border border-brand-beige rounded-lg focus:ring-2 focus:ring-brand-brown focus:border-transparent outline-none" placeholder="Your name" />
                 </div>
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1">Email</label>
                   <input type="email" id="email" className="w-full px-4 py-2 border border-brand-beige rounded-lg focus:ring-2 focus:ring-brand-brown focus:border-transparent outline-none" placeholder="your@email.com" />
                 </div>
               </div>
               
               <div>
                 <label htmlFor="subject" className="block text-sm font-medium text-brand-dark mb-1">Subject</label>
                 <select id="subject" className="w-full px-4 py-2 border border-brand-beige rounded-lg focus:ring-2 focus:ring-brand-brown focus:border-transparent outline-none">
                   <option>General Inquiry</option>
                   <option>Party Tray Booking</option>
                   <option>Conference Room / VIP Booking</option>
                   <option>Mobile Coffee Bar Event</option>
                 </select>
               </div>

               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1">Message</label>
                 <textarea id="message" rows={4} className="w-full px-4 py-2 border border-brand-beige rounded-lg focus:ring-2 focus:ring-brand-brown focus:border-transparent outline-none" placeholder="How can we help you?"></textarea>
               </div>

               <button type="submit" className="w-full bg-brand-brown text-white font-bold py-3 rounded-lg hover:bg-brand-accent transition-colors">
                 Send Message
               </button>
             </form>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-sm border border-brand-beige h-[400px]">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15383.003180424566!2d120.3444458518939!3d15.922091461623912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339169faecbaaaab%3A0xbcc0e5cb198f2441!2zU2FuIENhcmxvcywgUGFuZ2FzaW5hbg!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph" 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             allowFullScreen 
             loading="lazy" 
             title="Kanto Cafe Location"
           ></iframe>
        </div>
      </div>
    </div>
  );
}

```

## src/pages/Gallery.tsx
```tsx
const IMAGES = [
  { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80", caption: "Modern Two-Storey Space" },
  { src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=800&q=80", caption: "Cozy Interiors" },
  { src: "https://images.unsplash.com/photo-1533089862017-7c392454a86d?auto=format&fit=crop&w=800&q=80", caption: "Ultimate Breakfast" },
  { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80", caption: "Beef Salpicao" },
  { src: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80", caption: "Flavoured Croffles" },
  { src: "https://images.unsplash.com/photo-1560931560-619058b73a34?auto=format&fit=crop&w=800&q=80", caption: "Spanish Latte" },
  { src: "https://images.unsplash.com/photo-1530373239216-42518e6b4063?auto=format&fit=crop&w=800&q=80", caption: "Java Chip Frappé" },
  { src: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80", caption: "Tiger Milk Tea" },
];

export default function Gallery() {
  return (
    <div className="bg-brand-light min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-center text-brand-dark mb-12">Gallery</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {IMAGES.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-sm cursor-pointer h-64">
              <img 
                src={image.src} 
                alt={image.caption} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/40 transition-colors duration-300 flex items-end justify-center">
                 <p className="text-white font-medium p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {image.caption}
                 </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

```

## src/pages/PartyTrays.tsx
```tsx
import { Link } from 'react-router-dom';

export default function PartyTrays() {
  return (
    <div className="bg-brand-light min-h-screen pb-20">
      {/* Header */}
      <div className="bg-brand-brown py-16 text-center text-white">
        <h1 className="font-serif text-4xl font-bold mb-4">Bilao & Party Trays</h1>
        <p className="opacity-90 max-w-2xl mx-auto px-4">
          Perfect for family gatherings, professional meetings, and events.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-brand-dark text-brand-dark/80 mx-auto text-center">
          <h2 className="text-3xl mb-8">Make Your Events Sweeter!</h2>
          <p className="mb-6">
            Kanto Cafe accepts advance orders for Party Trays (good for 12-15 people) and Bilao packages (S/M/L) to make your celebrations hassle-free!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 text-left">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-brand-beige">
                <h3 className="font-bold text-xl text-brand-dark mb-4 border-b pb-2">Party Trays (Good for 12-15 pax)</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Buttered Chichoke</li>
                    <li>Beef & Mushroom</li>
                    <li>Beef Stroganoff</li>
                    <li>Beef Caldereta</li>
                    <li>Chicken Cordon Bleu</li>
                    <li>Chicken Afritada</li>
                    <li>Chicken Casserole</li>
                    <li>Creamy Cream Dory</li>
                    <li>Crispy Kare-Kare</li>
                    <li>Pork Humba</li>
                    <li>Pata Tim</li>
                    <li>Sushi Platter</li>
                </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-brand-beige">
                <h3 className="font-bold text-xl text-brand-dark mb-4 border-b pb-2">Bilao Sizes (S / M / L)</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Pancit Bihon</li>
                    <li>Pancit Canton</li>
                    <li>Pancit Sotanghon</li>
                    <li>Pancit Sisig</li>
                </ul>
            </div>
          </div>

          <div className="mt-12">
            <p className="mb-6 font-bold text-brand-dark">Send us a message to book your party trays!</p>
            <Link to="/contact" className="inline-block bg-brand-brown text-white font-bold py-3 px-8 rounded-full hover:bg-brand-accent transition-colors">
              Contact us to order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

```

## src/layouts/Layout.tsx
```tsx
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-brand-light">
      <Navbar />
      <main className="flex-grow pt-20">
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
      <Footer />
    </div>
  );
}

```

