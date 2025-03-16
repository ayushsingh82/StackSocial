import React, { useState } from 'react';

const ChatPage = () => {
  const [selectedCharacter, setSelectedCharacter] = useState('');
  
  const characters = [
    { 
      name: 'Stacks Twitter',
      color: 'blue-300',
      icon: '🐦',
      description: 'Get real-time Stacks ecosystem updates, developer news, and community highlights from Twitter'
    },
    { 
      name: '$STX',
      color: 'green-300',
      icon: '📊',
      description: 'Track STX price, market updates, and get insights about Stacks blockchain metrics'
    },
    { 
      name: 'NFTs',
      color: 'purple-300',
      icon: '🎨',
      description: 'Explore Stacks NFT collections, track floor prices, and discover new drops'
    },
    { 
      name: 'Memecoins',
      color: 'yellow-300',
      icon: '🚀',
      description: 'Stay updated with Stacks ecosystem tokens, trending memecoins, and market movements'
    }
  ];

  return (
    <div className="flex pt-16">
      {/* Sidebar */}
      <div className="w-64 min-h-[calc(100vh-64px)] bg-gray-900 text-white fixed left-0 top-16">
        {/* Stack Twitter Section */}
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-bold mb-3 text-blue-400">Stack Twitter</h3>
          <div className="space-y-2">
       
          </div>
        </div>

        {/* $STX Tags Section */}
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-bold mb-3 text-green-400">$STX Tags</h3>
      
        </div>

        {/* NFTs Section */}
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-bold mb-3 text-purple-400">NFTs</h3>
          <div className="space-y-2">
        
          </div>
        </div>

        {/* Memecoins Section */}
        <div className="p-4">
          <h3 className="text-lg font-bold mb-3 text-yellow-400">Memecoins</h3>
          <div className="space-y-2">
           
            <div className="bg-gray-800 p-2 rounded">
              <div className="flex justify-between items-center">
           
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Content */}
      <div className="ml-64 flex-1 bg-gray-800 min-h-screen">
        <div className="p-8">
          {/* Pixelated Header */}
          <h2 className="font-['Press_Start_2P'] text-3xl text-center mb-12 text-white 
            drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transform hover:scale-105 
            transition-transform cursor-default">
            SELECT YOUR AGENT
          </h2>

          {/* Agent Grid - Updated size classes */}
          <div className="max-w-4xl mx-auto grid grid-cols-2 gap-6 px-4">
            {characters.map((character) => (
              <div
                key={character.name}
                onClick={() => setSelectedCharacter(character.name)}
                className={`aspect-square bg-gray-900/50 rounded-lg p-4 cursor-pointer
                  border-2 hover:border-${character.color} transition-all duration-300
                  ${selectedCharacter === character.name ? `border-${character.color} bg-gray-900/80` : 'border-gray-700'}
                  transform hover:scale-102 hover:shadow-lg hover:shadow-${character.color}/20
                  max-w-[300px] mx-auto w-full`}
              >
                <div className="h-full flex flex-col items-center justify-center text-center space-y-3">
                  <span className="text-3xl mb-1">{character.icon}</span>
                  <h3 className={`font-['Press_Start_2P'] text-${character.color} text-lg mb-2`}>
                    {character.name}
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {character.description}
                  </p>
                  {selectedCharacter === character.name && (
                    <button 
                      className={`mt-2 bg-${character.color} text-black px-4 py-1.5 rounded-full
                        font-['Press_Start_2P'] text-xs transform hover:scale-105 transition-all duration-300`}
                    >
                      ACTIVATE
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Selected Agent Info - Optional bottom section */}
          {selectedCharacter && (
            <div className="mt-12 text-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 
                rounded-lg font-['Press_Start_2P'] text-sm transition-all duration-300
                transform hover:scale-105">
                START CHAT WITH {selectedCharacter.toUpperCase()}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatPage; 