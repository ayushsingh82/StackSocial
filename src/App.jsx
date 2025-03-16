import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ChatPage from './components/ChatPage';
import './App.css'

function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/explore" element={<div className="text-white p-8 relative z-10">Explore Page Coming Soon</div>} />
          <Route path="/create" element={<div className="text-white p-8 relative z-10">Create Page Coming Soon</div>} />
          <Route path="/profile" element={<div className="text-white p-8 relative z-10">Profile Page Coming Soon</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
