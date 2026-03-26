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
