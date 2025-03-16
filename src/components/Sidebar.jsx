import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuItems = [
    {
      name: 'Get Started',
      path: '/',
      color: 'white',
      icon: '🚀'
    },
    {
      name: 'Stack Twitter',
      path: '/stacks',
      color: 'blue-400',
      icon: '🐦'
    },
    {
      name: '$STX Tags',
      path: '/stx',
      color: 'green-400',
      icon: '🏷️'
    },
    {
      name: 'NFTs',
      path: '/nfts',
      color: 'purple-400',
      icon: '🎨'
    },
    {
      name: 'Memecoins',
      path: '/memecoins',
      color: 'yellow-400',
      icon: '💰'
    }
  ];

  return (
    <div className="w-64 min-h-[calc(100vh-64px)] bg-gray-900 text-white fixed left-0 top-16">
      {menuItems.map((item) => (
        <Link to={item.path} key={item.path}>
          <div className={`p-4 border-b border-gray-700 cursor-pointer transition-colors
            ${isActive(item.path) ? `bg-${item.color}/20` : 'hover:bg-gray-800'}`}>
            <div className="flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
              <h3 className={`text-lg font-bold text-${item.color}`}>
                {item.name}
              </h3>
            </div>
            {isActive(item.path) && (
              <div className="mt-2 text-sm text-gray-400">
                Currently viewing {item.name}
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar; 