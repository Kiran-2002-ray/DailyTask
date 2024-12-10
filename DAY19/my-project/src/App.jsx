import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import HomePage from './component/HomePage';  // Example Home page
import AboutPage from './component/AboutPage';  // Example About page
import Card from './component/Card';

export default function App() {
  return (
    <Router>
      <Navbar />  {/* Static navbar */}
      <div className="p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/card" element={<Card />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}
