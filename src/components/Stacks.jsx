import React from 'react';
import Sidebar from './Sidebar';
import StacksChat from './StacksChat';

const Stacks = () => {
  return (
    <div className="flex pt-16">
      <Sidebar />
      <div className="ml-64 flex-1">
        <StacksChat />
      </div>
    </div>
  );
};

export default Stacks;