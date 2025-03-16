import React from 'react';
import Sidebar from './Sidebar';
import NFTsChat from './NFTsChat';

const NFTS = () => {
  return (
    <div className="flex pt-16">
      <Sidebar />
      <div className="ml-64 flex-1">
        <NFTsChat />
      </div>
    </div>
  );
};

export default NFTS;