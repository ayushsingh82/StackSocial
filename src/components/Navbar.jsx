import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-700 bg-opacity-90 p-4 border-b-4 border-blue-400 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-purple-100 text-xl hover:text-white transition-colors">
        StackSocial
        </Link>
        <button 
          onClick={() => navigate('/chat')}
          className="bg-white text-black px-6 py-2 rounded-lg font-bold hover:bg-purple-100 transition-colors"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;