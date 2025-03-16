import React from 'react';
import Sidebar from './Sidebar';
import ChatInterface from './ChatInterface';

const Stacks = () => {
  return (
    <div className="flex pt-16">
      <Sidebar />
      <div className="ml-64 flex-1">
        <ChatInterface agentType="Stacks" />
      </div>
    </div>
  );
};

export default Stacks;