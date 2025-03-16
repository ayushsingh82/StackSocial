import React from 'react'
import Sidebar from './Sidebar'
import StxChat from './StxChat'

const Stx = () => {
  return (
    <div className="flex pt-16">
      <Sidebar />
      <div className="ml-64 flex-1">
        <StxChat />
      </div>
    </div>
  )
}

export default Stx