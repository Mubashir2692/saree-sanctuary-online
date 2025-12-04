export function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-heading text-center mb-8">Timeless Ethnic Elegance, Curated by Mom</h2>
      <p className="text-lg text-center mb-12 max-w-2xl mx-auto">Discover handpicked sarees, jewelry, and more—delivered with love.</p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-4">Sarees</div>
        <div className="bg-white rounded-lg shadow-md p-4">Jewelry</div>
        <div className="bg-white rounded-lg shadow-md p-4">Men's Wear</div>
      </div>
    </div>
  );
}