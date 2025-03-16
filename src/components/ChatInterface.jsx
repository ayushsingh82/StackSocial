import React, { useState } from 'react';

const ChatInterface = ({ agentType }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  // Sample tweets data
  const stacksTweets = [
    {
      id: 1,
      url: "https://x.com/Stacks/status/1896575312148005191",
      content: "Stacks 2.0 brings Bitcoin L2 with native BTC ordinals support and enhanced scalability.",
      date: "2024-03-01"
    },
    {
      id: 2,
      url: "https://x.com/Stacks/status/1901015563973124236",
      content: "The future of Stacks: Nakamoto release bringing 10x improvement in transaction throughput.",
      date: "2024-03-10"
    },
    {
      id: 3,
      url: "https://x.com/Stacks/status/1900894766512173450",
      content: "New developer tools and documentation available for building on Stacks.",
      date: "2024-03-09"
    },
    {
      id: 4,
      url: "https://x.com/Stacks/status/1900532417418653860",
      content: "Community update: Growing ecosystem with new DeFi and NFT projects launching.",
      date: "2024-03-08"
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      // Add user message
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);

      // Simulate AI response based on tweets
      const response = generateResponse(inputMessage.toLowerCase());
      setTimeout(() => {
        setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
      }, 1000);

      setInputMessage('');
    }
  };

  const generateResponse = (question) => {
    // Simple keyword matching for demo purposes
    if (question.includes('stacks 2.0') || question.includes('ordinals')) {
      return `According to recent updates, Stacks 2.0 introduces native BTC ordinals support and enhanced scalability as a Bitcoin L2. You can learn more here: ${stacksTweets[0].url}`;
    }
    if (question.includes('nakamoto') || question.includes('throughput')) {
      return `The upcoming Nakamoto release will bring a 10x improvement in transaction throughput. Check out the details: ${stacksTweets[1].url}`;
    }
    if (question.includes('developer') || question.includes('tools')) {
      return `New developer tools and documentation have been released to make building on Stacks easier. Find out more: ${stacksTweets[2].url}`;
    }
    if (question.includes('ecosystem') || question.includes('defi') || question.includes('nft')) {
      return `The Stacks ecosystem is growing with new DeFi and NFT projects. Learn about recent developments: ${stacksTweets[3].url}`;
    }
    return "I can help you with information about Stacks' latest updates, development tools, ecosystem growth, and technical features. What would you like to know?";
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="bg-gray-800 p-4 border-b border-gray-700">
        <h2 className="font-['Press_Start_2P'] text-xl text-white">
          Stacks Twitter Feed Assistant
        </h2>
      </div>

      {/* Display recent tweets */}
      <div className="bg-gray-900 p-4 border-b border-gray-700">
        <h3 className="text-blue-400 font-semibold mb-2">Recent Updates:</h3>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {stacksTweets.map(tweet => (
            <a 
              key={tweet.id}
              href={tweet.url}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[250px] bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <p className="text-white text-sm">{tweet.content}</p>
              <p className="text-gray-400 text-xs mt-2">{tweet.date}</p>
            </a>
          ))}
        </div>
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
              {msg.text}
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
            placeholder="Ask about recent Stacks updates..."
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

export default ChatInterface; 