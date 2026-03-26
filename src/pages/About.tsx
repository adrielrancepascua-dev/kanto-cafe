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
