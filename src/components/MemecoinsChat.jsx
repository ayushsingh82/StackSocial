import React, { useState } from 'react';

const MemecoinsChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const stacksEcosystemData = `
Top Stacks Ecosystem Coins by Market Cap
| #   | Coin        | Symbol | Price ($)  | 1h Change | 24h Change | 7d Change | 24h Volume ($)  | Market Cap ($) |
|-----|------------|--------|------------|-----------|------------|-----------|-----------------|----------------|
| 88  | Stacks     | STX    | 0.6528     | 0.3%      | 0.0%       | 4.6%      | 16,720,741      | 990,447,135    |
| 468 | sBTC       | SBTC   | 86,169.10  | 0.1%      | 0.0%       | 1.3%      | 3,962.80        | 86,169,100     |
| 944 | ALEX Lab   | ALEX   | 0.03243    | 0.4%      | 0.2%       | 6.7%      | 371,836         | 26,734,666     |
| 1871| USDh       | USDH   | 0.9995     | 0.0%      | 0.0%       | 0.0%      | 117.05          | 5,018,838      |
| 2012| Welshcorgi | WELSH  | 0.0004113  | 0.2%      | 3.8%       | 15.2%     | 24,771.33       | 4,113,053      |
| 2294| Arkadiko   | DIKO   | 0.04079    | 0.0%      | 1.0%       | 0.5%      | 187.82          | 3,101,107      |
| 3076| Velar      | VELAR  | 0.01052    | 0.1%      | 1.5%       | 16.5%     | 175,935         | 1,371,029      |
| 3400| LEO        | LEO    | 0.0001069  | 0.2%      | 0.2%       | 13.2%     | 35,761.22       | 1,015,867      |
| 3426| LunarCrush | LUNR   | 0.00676    | -         | -          | -         | 11.14           | 1,013,954      |
| 4325| SatoshAI   | SAI    | 0.0002453  | -         | -          | -         | -               | -              |
`;

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      // Add user message
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);

      // Bot response with table data
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: stacksEcosystemData,
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
          Stacks Ecosystem Coins Bot
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
            placeholder="Ask about Stacks ecosystem coins..."
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

export default MemecoinsChat; 