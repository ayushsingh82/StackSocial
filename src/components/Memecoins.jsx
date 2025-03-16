import React from 'react';
import Sidebar from './Sidebar';
import MemecoinsChat from './MemecoinsChat';

const Memecoins = () => {
  return (
    <div className="flex pt-16">
      <Sidebar />
      <div className="ml-64 flex-1">
        <MemecoinsChat />
      </div>
    </div>
  );
};

export default Memecoins;