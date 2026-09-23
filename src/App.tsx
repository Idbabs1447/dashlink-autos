import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Shop from './pages/Shop';
import VehicleDetail from './pages/VehicleDetail';
import PreOrder from './pages/PreOrder';
import About from './pages/About';
import Saved from './pages/Saved';
import CarGuide from './pages/CarGuide';
import ArticleDetail from './pages/ArticleDetail';

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.key]);

  return (
    <PageTransition locationKey={location.key}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:vehicleId" element={<VehicleDetail />} />
        <Route path="/pre-order" element={<PreOrder />} />
        <Route path="/about" element={<About />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/car-guide" element={<CarGuide />} />
        <Route path="/car-guide/:articleId" element={<ArticleDetail />} />
        <Route path="/contact" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </PageTransition>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
