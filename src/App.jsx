import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ChatPage from './components/ChatPage';
import './App.css'
import Memecoins from './components/Memecoins';
import NFTS from './components/NFTS';
import Stacks from './components/Stacks';
import Stx from './components/Stx';

function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/memecoins" element={<Memecoins />} />
          <Route path="/nfts" element={<NFTS />} />
          <Route path="/stx" element={<Stx />} />
          <Route path="/stacks" element={<Stacks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
