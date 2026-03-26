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
