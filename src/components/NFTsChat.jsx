import React, { useState } from 'react';

const NFTsChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const nftCollectionsData = `
Top NFT Collections on Stacks by Volume
| #  | Collection Name                           | Volume (STX) | Floor Price (STX) |
|----|------------------------------------------|-------------|-----------------|
| 1  | Megapont Ape Club                        | 5.4M        | 275             |
| 2  | BNS: Bitcoin Name System (V1 - Legacy)   | 1.5M        | 0               |
| 3  | Bitcoin Monkeys                          | 983.4k      | 49              |
| 4  | Bitcoin Birds                            | 700.6k      | 675             |
| 5  | Stacks Punks V3                          | 535.4k      | 4               |
| 6  | Crash Punks                              | 471.4k      | 14              |
| 7  | Project Indigo Act 1: Wastelanders       | 394k        | 7               |
| 8  | Megapont Robots                          | 361.3k      | 10              |
| 9  | Satoshibles                              | 282.6k      | 63              |
| 10 | Wasteland Apes                           | 251k        | 3               |
| 11 | Bitcoin Monkeys Labs                     | 222.7k      | 25              |
| 12 | Mutant Monkeys                           | 220.2k      | 4               |
`;

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      // Add user message
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);

      // Bot response with NFT collections data
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: nftCollectionsData,
          sender: 'bot',
          isTable: true 
        }]);
      }, 500);

      setInputMessage('');
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="bg-gray-800 p-4 border-b border-gray-700">
        <h2 className="font-['Press_Start_2P'] text-xl text-white">
          Stacks NFT Collections Bot
        </h2>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-800">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[85%] rounded-lg p-3 ${
              msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'
            }`}>
              {msg.isTable ? (
                <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-sm">
                  {msg.text}
                </pre>
              ) : (
                msg.text
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input form */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700 bg-gray-800">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ask about Stacks NFT collections..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default NFTsChat; 