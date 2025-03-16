import React, { useState } from 'react';

const StacksChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const twitterLinks = [
    "https://x.com/Stacks/status/1896575312148005191",
    "https://x.com/Stacks/status/1901015563973124236",
    "https://x.com/Stacks/status/1900894766512173450",
    "https://x.com/Stacks/status/1900532417418653860"
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      // Add user message
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);

      // Bot response with all Twitter links
      const response = "Here are relevant Stacks Twitter updates:\n\n" + 
        twitterLinks.map(link => `• ${link}`).join('\n');

      setTimeout(() => {
        setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
      }, 500);

      setInputMessage('');
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="bg-gray-800 p-4 border-b border-gray-700">
        <h2 className="font-['Press_Start_2P'] text-xl text-white">
          Stacks Twitter Bot
        </h2>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-800">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[70%] rounded-lg p-3 ${
              msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'
            }`}>
              {msg.text.split('\n').map((line, i) => (
                <div key={i} className="mb-1">
                  {line.startsWith('•') ? (
                    <a 
                      href={line.substring(2)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {line.substring(2)}
                    </a>
                  ) : line}
                </div>
              ))}
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
            placeholder="Ask about Stacks updates..."
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

export default StacksChat; 