import React, { useState } from 'react';

const ChatPage = () => {
  const [selectedCharacter, setSelectedCharacter] = useState('BFF');
  
  const characters = [
    { name: 'BFF', color: 'purple-300' },
    { name: 'Manager', color: 'yellow-300' },
    { name: 'Coach', color: 'blue-300' },
    { name: 'Shopper', color: 'green-300' },
    { name: 'Girlfriend', color: 'pink-300' }
  ];

  const getButtonClasses = (character) => {
    if (selectedCharacter === character.name) {
      return `bg-${character.color} text-black`;
    }
    return `hover:bg-${character.color}/50 text-${character.color}`;
  };

  return (
    <div className="pt-20"> {/* Add padding top for fixed navbar */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Fixed Sidebar */}
        <div className="w-64 bg-gray-900 text-white fixed h-[calc(100vh-80px)]">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-6">Choose Character</h2>
            <div className="flex flex-col gap-2">
              {characters.map((character) => (
                <button
                  key={character.name}
                  onClick={() => setSelectedCharacter(character.name)}
                  className={`p-3 rounded-lg text-left transition-colors ${
                    selectedCharacter === character.name
                      ? `bg-${character.color} text-black font-bold`
                      : `hover:bg-${character.color}/20`
                  }`}
                >
                  <div className={`flex items-center gap-2`}>
                    <div className={`w-3 h-3 rounded-full bg-${character.color}`}></div>
                    {character.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 ml-64 bg-gray-50">
          <div className="h-full flex flex-col">
            {/* Chat Header */}
            <div className="bg-white p-4 border-b">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full bg-${characters.find(c => c.name === selectedCharacter)?.color}`}></div>
                Chat with {selectedCharacter}
              </h3>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4">
              {/* Messages will go here */}
            </div>

            {/* Chat Input */}
            <div className="bg-white p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button className={`bg-${characters.find(c => c.name === selectedCharacter)?.color} text-black px-6 py-2 rounded-lg hover:opacity-90 transition-colors font-bold`}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage; 