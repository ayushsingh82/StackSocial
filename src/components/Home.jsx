import React from 'react'

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section - Red Background */}
      <div className="min-h-screen bg-red-600 relative z-10 px-4 overflow-hidden">
        {/* Background SVGs for red section */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.shilltube.fun/images/hero-image02.svg" 
            className="absolute top-20 -left-10 w-[400px] h-[400px]"
            style={{ filter: 'brightness(2) saturate(1.5)' }}
            alt=""
          />
          <img 
            src="https://www.shilltube.fun/images/hero-image06.svg" 
            className="absolute bottom-20 right-10 w-[450px] h-[450px]"
            style={{ filter: 'brightness(2) saturate(1.5)' }}
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
              AI-Powered Memecoin Entertainment Platform
            </p>
            <p className="text-lg text-black/90 max-w-2xl mx-auto mt-4 bg-white/80 px-6 py-4 rounded-lg">
              Transform your static memecoin into a dynamic, engaging AI personality that interacts with your community 24/7. Stand out in the crowded memecoin market with live entertainment and automated engagement.
            </p>
            <div className="flex gap-6 mt-8">
              <button className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-black/80 transition-colors">
                LIST YOUR TOKEN
              </button>
              <button className="border-2 border-black text-black px-8 py-3 rounded-lg font-bold hover:bg-black/10 transition-colors">
                EXPLORE STREAMS
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
            src="https://www.shilltube.fun/images/hero-image10.svg" 
            className="absolute top-40 right-0 w-[400px] h-[400px]"
            style={{ filter: 'brightness(2) saturate(1.5)' }}
            alt=""
          />
          <img 
            src="https://www.shilltube.fun/images/hero-image11.svg" 
            className="absolute bottom-20 left-10 w-[400px] h-[400px]"
            style={{ filter: 'brightness(2) saturate(1.5)' }}
            alt=""
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="flex justify-center mb-16">
            <h2 className="text-4xl font-bold text-white bg-black/80 px-6 py-3 rounded-lg">
              How ShillTube Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="bg-black/5 p-8 rounded-lg border border-black/20">
              <h3 className="text-2xl font-bold text-black mb-4 bg-blue-300 inline-block px-3 py-1 rounded">
                List Your Token
              </h3>
              <p className="text-black/90 bg-blue-300 p-3 rounded">
                Submit your memecoin information similar to how you would on Dexscreener, including contract address, token details, and social links.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-black/5 p-8 rounded-lg border border-black/20">
              <h3 className="text-2xl font-bold text-black mb-4 bg-blue-300 inline-block px-3 py-1 rounded">
                Create Your Character
              </h3>
              <p className="text-black/90 bg-blue-300 p-3 rounded">
                Choose from VTuber-style templates or upload your own meme images. Our system will animate them and bring your token to life!
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-black/5 p-8 rounded-lg border border-black/20">
              <h3 className="text-2xl font-bold text-black mb-4 bg-blue-300 inline-block px-3 py-1 rounded">
                Customize AI Personality
              </h3>
              <p className="text-black/90 bg-blue-300 p-3 rounded">
                Define your character's voice, personality traits, and interaction style based on your meme's origin story and brand.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-black/5 p-8 rounded-lg border border-black/20">
              <h3 className="text-2xl font-bold text-black mb-4 bg-blue-300 inline-block px-3 py-1 rounded">
                Go Live 24/7
              </h3>
              <p className="text-black/90 bg-blue-300 p-3 rounded">
                Launch your memecoin's automated live stream that engages with viewers, hosts events, and builds community around the clock.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home