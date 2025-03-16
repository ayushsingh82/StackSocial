import React from 'react'
import Sidebar from './Sidebar'
import ChatInterface from './ChatInterface'

const Stx = () => {
  return (
    <div className="flex pt-16">
      <Sidebar />
      <div className="ml-64 flex-1">
        <ChatInterface agentType="STX" />
      </div>
    </div>
  )
}

export default Stx