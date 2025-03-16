import React from 'react';
import Sidebar from './Sidebar';
import ChatInterface from './ChatInterface';

const NFTS = () => {
  return (
    <div className="flex pt-16">
      <Sidebar />
      <div className="ml-64 flex-1">
        <ChatInterface agentType="NFTs" />
      </div>
    </div>
  );
};

export default NFTS;