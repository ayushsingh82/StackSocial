import React from 'react'

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section - Red Background */}
      <div className="min-h-screen bg-red-600 relative z-10 px-4 overflow-hidden">
        {/* Background SVGs for red section */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://thumbs.dreamstime.com/b/basic-rgb-242724955.jpg" 
            className="absolute top-20 -left-10 w-[400px] h-[400px] opacity-50"
            style={{ 
              filter: 'brightness(2.5) saturate(2) contrast(1.2)',
              mixBlendMode: 'screen',
              backgroundColor: 'rgb(239, 68, 68)' // Brighter red
            }}
            alt=""
          />
          <img 
            src="https://thumbs.dreamstime.com/b/basic-rgb-242724782.jpg" 
            className="absolute bottom-20 right-10 w-[450px] h-[450px] opacity-50"
            style={{ 
              filter: 'brightness(2.5) saturate(2) contrast(1.2)',
              mixBlendMode: 'screen',
              backgroundColor: 'rgb(239, 68, 68)' // Brighter red
            }}
            alt=""
          />
        </div>

        <div className="container mx-auto pt-32 text-center relative z-10">
          <div className="flex flex-col items-center space-y-4 mb-12">
            <h1 className="pixel-heading flex items-center justify-center gap-4">
              <span className="text-[80px] font-['Press_Start_2P'] bg-black/80 text-yellow-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] 
                transform hover:scale-105 transition-transform cursor-default
                border-4 border-white px-4 py-2">
                Stack
              </span>
              <span className="text-[80px] font-['Press_Start_2P'] bg-black/80 text-blue-400 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]
                transform hover:scale-105 transition-transform cursor-default
                border-4 border-white/80 px-4 py-2">
                Social
              </span>
           
            </h1>
            <p className="text-2xl text-black max-w-3xl mx-auto mt-6 bg-white/80 px-6 py-2 rounded-lg inline-block">
              AI-Powered SocialFI Stacks ecosystem Platform
            </p>
            <p className="text-lg text-black/90 max-w-2xl mx-auto mt-4 bg-white/80 px-6 py-4 rounded-lg">
              Transform your way to get the latest updates and SocialFi news from stacks ecosystem and top nfts ,  memecoin data we  interacts with our community 24/7.
            </p>
            <div className="flex gap-6 mt-8">
              <button className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-black/80 transition-colors">
             Launch Agent
              </button>
              <button className="border-2 border-black text-black px-8 py-3 rounded-lg font-bold hover:bg-black/10 transition-colors">
                EXPLORE 
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section - Blue Background */}
      <div className="min-h-screen bg-blue-600 relative z-0 px-4 py-20 overflow-hidden">
        {/* Background SVGs for blue section */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://ih1.redbubble.net/image.3131147375.3020/st,small,507x507-pad,600x600,f8f8f8.jpg" 
            className="absolute top-40 right-0 w-[400px] h-[400px] opacity-50"
            style={{ 
              filter: 'brightness(2.5) saturate(2) contrast(1.2)',
              mixBlendMode: 'screen',
              backgroundColor: 'rgb(59, 130, 246)' // Brighter blue
            }}
            alt=""
          />
          <img 
            src="https://thumbs.dreamstime.com/b/basic-rgb-242724782.jpg" 
            className="absolute bottom-20 left-10 w-[400px] h-[400px] opacity-50"
            style={{ 
              filter: 'brightness(2.5) saturate(2) contrast(1.2)',
              mixBlendMode: 'screen',
              backgroundColor: 'rgb(59, 130, 246)' // Brighter blue
            }}
            alt=""
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="flex justify-center mb-16">
            <h2 className="text-4xl font-bold text-white bg-black/80 px-6 py-3 rounded-lg">
              How Stacksocial Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="bg-black/5 p-8 rounded-lg border border-black/20">
              <h3 className="text-2xl font-bold text-black mb-4 bg-blue-300 inline-block px-3 py-1 rounded">
               Stacks Agent
              </h3>
              <p className="text-black/90 bg-blue-300 p-3 rounded">
This agent updates you with the latest feed from the stacks official twitter page 
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-black/5 p-8 rounded-lg border border-black/20">
              <h3 className="text-2xl font-bold text-black mb-4 bg-blue-300 inline-block px-3 py-1 rounded">
           $STX agent
              </h3>
              <p className="text-black/90 bg-blue-300 p-3 rounded">
              Track STX price, market updates, and get insights about Stacks blockchain metrics
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-black/5 p-8 rounded-lg border border-black/20">
              <h3 className="text-2xl font-bold text-black mb-4 bg-blue-300 inline-block px-3 py-1 rounded">
               NFTs Agent
              </h3>
              <p className="text-black/90 bg-blue-300 p-3 rounded">
                Define your character's voice, personality traits, and interaction style based on your meme's origin story and brand.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-black/5 p-8 rounded-lg border border-black/20">
              <h3 className="text-2xl font-bold text-black mb-4 bg-blue-300 inline-block px-3 py-1 rounded">
               Token Agents
              </h3>
              <p className="text-black/90 bg-blue-300 p-3 rounded">
              Stay updated with Stacks ecosystem tokens, trending memecoins, and market movements
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home