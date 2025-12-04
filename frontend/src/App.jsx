import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-accent text-gray-800">
        <header className="bg-primary text-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <img src="/logo.png" alt="Saree Sanctuary Logo" className="h-8 w-8 mr-2" />
              <h1 className="text-2xl font-heading font-bold">Saree Sanctuary</h1>
            </div>            
              <nav className="hidden md:flex space-x-4">
              <a href="/catalog" className="hover:underline">Shop</a>
              <a href="/about" className="hover:underline">About</a>
            </nav>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;