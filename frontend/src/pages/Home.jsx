export function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-heading text-center mb-8">Timeless Ethnic Elegance, Curated by Mom</h2>
      <p className="text-lg text-center mb-12 max-w-2xl mx-auto">Discover handpicked sarees, jewelry, and more—delivered with love.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Sarees Category - Use 3-piece images */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-xl font-bold mb-2 text-secondary">Sarees</h3>
          <img src="/images/3piece-red-01.png" alt="Red 3-Piece Saree" className="w-full h-48 object-cover rounded mb-2" />
          <img src="/images/3piece-blue-03.png" alt="Blue 3-Piece Saree" className="w-full h-48 object-cover rounded mb-2" />
          <img src="/images/3piece-green-04.png" alt="Green 3-Piece Saree" className="w-full h-48 object-cover rounded mb-2" />
          <p className="text-sm text-gray-600">Handpicked ethnic elegance</p>
        </div>

        {/* Jewelry Category - Use necklace images */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-xl font-bold mb-2 text-secondary">Jewelry</h3>
          <img src="/images/necklace-gold-01.png" alt="Gold Necklace 1" className="w-full h-48 object-cover rounded mb-2" />
          <img src="/images/necklace-gold-02.jpg.png" alt="Gold Necklace 2" className="w-full h-48 object-cover rounded mb-2" />
          <img src="/images/necklace-gold-03.jpg.png" alt="Gold Necklace 3" className="w-full h-48 object-cover rounded mb-2" />
          <p className="text-sm text-gray-600">Timeless gold treasures</p>
        </div>

        {/* Men's Wear Category - Use kurta images */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-xl font-bold mb-2 text-secondary">Men's Wear</h3>
          <img src="/images/kurta-blue-01.png" alt="Blue Kurta 1" className="w-full h-48 object-cover rounded mb-2" />
          <img src="/images/kurta-blue-02.png" alt="Blue Kurta 2" className="w-full h-48 object-cover rounded mb-2" />
          <img src="/images/kurta-red-05.png" alt="Red Kurta" className="w-full h-48 object-cover rounded mb-2" />
          <p className="text-sm text-gray-600">Traditional kurtas for him</p>
        </div>
      </div>
    </div>
  );
}