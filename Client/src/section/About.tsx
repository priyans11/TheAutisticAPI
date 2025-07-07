import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-orange-300 via-sky-300 to-purple-300 bg-clip-text text-transparent leading-tight">
            The Autistic API
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            The Ultimate Gateway to AI Innovation - Connecting Creators with the World
          </p>
        </div>

        {/* Bento Grid Layout - Redesigned for perfect fit */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto h-auto">
          
          {/* Main Purpose - Large Box */}
          <div className="md:col-span-3 lg:col-span-4 lg:row-span-2 bg-black/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl hover:shadow-orange-300/20 transition-all duration-500 hover:scale-[1.01] border-2 border-orange-300/30 hover:border-orange-300/60 group">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-300/20 to-orange-400/20 rounded-xl flex items-center justify-center mb-6 border-2 border-orange-300/40">
                <svg className="w-8 h-8 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-orange-300 group-hover:text-orange-200 transition-colors">
                AI Gateway Revolution
              </h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              Transform how the world accesses artificial intelligence. Our platform eliminates barriers between 
              brilliant AI innovations and those who need them most.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              One unified interface. Hundreds of AI models. Infinite possibilities for developers, 
              companies, and innovators worldwide.
            </p>
            <div className="bg-gradient-to-r from-orange-300/10 to-orange-400/10 rounded-lg p-4 border border-orange-300/20">
              <p className="text-orange-300 font-semibold tracking-wide">
                One Platform • Unlimited Intelligence • Global Impact
              </p>
            </div>
          </div>

          {/* For Developers - Tall Box */}
          <div className="md:col-span-3 lg:col-span-2 lg:row-span-2 bg-black/90 backdrop-blur-lg rounded-2xl p-6 shadow-2xl hover:shadow-sky-300/20 transition-all duration-500 hover:scale-[1.01] border-2 border-sky-300/30 hover:border-sky-300/60 group">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-300/20 to-sky-400/20 rounded-xl flex items-center justify-center mb-6 border-2 border-sky-300/40">
                <svg className="w-8 h-8 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-sky-300 group-hover:text-sky-200 transition-colors">
                For Developers
              </h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-sky-300/10 to-sky-400/10 rounded-lg p-4 border border-sky-300/20 hover:border-sky-300/40 transition-all duration-300">
                <h3 className="font-bold text-sky-300 mb-2">Instant Integration</h3>
                <p className="text-gray-400 text-sm">RESTful APIs with comprehensive documentation</p>
              </div>
              <div className="bg-gradient-to-r from-sky-300/10 to-sky-400/10 rounded-lg p-4 border border-sky-300/20 hover:border-sky-300/40 transition-all duration-300">
                <h3 className="font-bold text-sky-300 mb-2">Smart Pricing</h3>
                <p className="text-gray-400 text-sm">Transparent, usage-based billing model</p>
              </div>
              <div className="bg-gradient-to-r from-sky-300/10 to-sky-400/10 rounded-lg p-4 border border-sky-300/20 hover:border-sky-300/40 transition-all duration-300">
                <h3 className="font-bold text-sky-300 mb-2">Zero Configuration</h3>
                <p className="text-gray-400 text-sm">Deploy AI features in minutes, not months</p>
              </div>
            </div>
          </div>

          {/* For AI Creators - Medium Box */}
          <div className="md:col-span-2 lg:col-span-2 bg-black/90 backdrop-blur-lg rounded-2xl p-6 shadow-2xl hover:shadow-purple-300/20 transition-all duration-500 hover:scale-[1.01] border-2 border-purple-300/30 hover:border-purple-300/60 group">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-300/20 to-purple-400/20 rounded-xl flex items-center justify-center mb-6 border-2 border-purple-300/40">
                <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-purple-300 group-hover:text-purple-200 transition-colors">
                AI Creators
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Turn your breakthrough AI models into sustainable revenue streams. 
              Reach millions of developers instantly.
            </p>
            <div className="bg-gradient-to-r from-purple-300/10 to-purple-400/10 rounded-lg p-3 border border-purple-300/20">
              <p className="text-purple-300 font-semibold text-sm">
                Showcase • Monetize • Revolutionize
              </p>
            </div>
          </div>

          {/* For Enterprises - Medium Box */}
          <div className="md:col-span-2 lg:col-span-2 bg-black/90 backdrop-blur-lg rounded-2xl p-6 shadow-2xl hover:shadow-emerald-300/20 transition-all duration-500 hover:scale-[1.01] border-2 border-emerald-300/30 hover:border-emerald-300/60 group">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-300/20 to-emerald-400/20 rounded-xl flex items-center justify-center mb-6 border-2 border-emerald-300/40">
                <svg className="w-8 h-8 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-emerald-300 group-hover:text-emerald-200 transition-colors">
                Enterprises
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Enterprise-grade AI infrastructure with military-level security. 
              Scale your AI initiatives without complexity.
            </p>
            <div className="bg-gradient-to-r from-emerald-300/10 to-emerald-400/10 rounded-lg p-3 border border-emerald-300/20">
              <p className="text-emerald-300 font-semibold text-sm">
                Secure • Scalable • Supported
              </p>
            </div>
          </div>

          {/* API Testing - Medium Box */}
          <div className="md:col-span-2 lg:col-span-2 bg-black/90 backdrop-blur-lg rounded-2xl p-6 shadow-2xl hover:shadow-yellow-300/20 transition-all duration-500 hover:scale-[1.01] border-2 border-yellow-300/30 hover:border-yellow-300/60 group">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-300/20 to-yellow-400/20 rounded-xl flex items-center justify-center mb-6 border-2 border-yellow-300/40">
                <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-yellow-300 group-hover:text-yellow-200 transition-colors">
                Live Testing
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Test any AI model before integration. Real-time playground with instant feedback 
              and performance metrics.
            </p>
            <div className="bg-gradient-to-r from-yellow-300/10 to-yellow-400/10 rounded-lg p-3 border border-yellow-300/20">
              <p className="text-yellow-300 font-semibold text-sm">
                Test • Validate • Deploy
              </p>
            </div>
          </div>

          {/* Model Discovery - Wide Box */}
          <div className="md:col-span-3 lg:col-span-3 bg-black/90 backdrop-blur-lg rounded-2xl p-6 shadow-2xl hover:shadow-rose-300/20 transition-all duration-500 hover:scale-[1.01] border-2 border-rose-300/30 hover:border-rose-300/60 group">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-300/20 to-rose-400/20 rounded-xl flex items-center justify-center border-2 border-rose-300/40 flex-shrink-0">
                <svg className="w-8 h-8 text-rose-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-rose-300 group-hover:text-rose-200 transition-colors">
                  Intelligent Discovery Engine
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Discover cutting-edge AI models tailored to your needs. From computer vision to natural language mastery, 
                  find the perfect intelligence for your next breakthrough.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gradient-to-r from-rose-300/10 to-rose-400/10 border border-rose-300/20 text-rose-300 px-3 py-1 rounded-lg text-sm font-medium hover:border-rose-300/40 transition-all duration-300">
                    Explore Models
                  </span>
                  <span className="bg-gradient-to-r from-rose-300/10 to-rose-400/10 border border-rose-300/20 text-rose-300 px-3 py-1 rounded-lg text-sm font-medium hover:border-rose-300/40 transition-all duration-300">
                    Live Testing
                  </span>
                  <span className="bg-gradient-to-r from-rose-300/10 to-rose-400/10 border border-rose-300/20 text-rose-300 px-3 py-1 rounded-lg text-sm font-medium hover:border-rose-300/40 transition-all duration-300">
                    API Docs
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Innovation Ecosystem - Wide Box */}
          <div className="md:col-span-3 lg:col-span-3 bg-black/90 backdrop-blur-lg rounded-2xl p-6 shadow-2xl hover:shadow-blue-300/20 transition-all duration-500 hover:scale-[1.01] border-2 border-blue-300/30 hover:border-blue-300/60 group">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-300/20 to-blue-400/20 rounded-xl flex items-center justify-center border-2 border-blue-300/40 flex-shrink-0">
                <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-blue-300 group-hover:text-blue-200 transition-colors">
                  Innovation Ecosystem
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Join a thriving community where breakthrough ideas become reality. We accelerate innovation, 
                  eliminate technical barriers, and create new pathways to AI-powered success.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-r from-blue-300/10 to-blue-400/10 border border-blue-300/20 p-3 rounded-lg hover:border-blue-300/40 transition-all duration-300">
                    <p className="text-blue-300 font-bold text-sm">Instant Deployment</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-300/10 to-blue-400/10 border border-blue-300/20 p-3 rounded-lg hover:border-blue-300/40 transition-all duration-300">
                    <p className="text-blue-300 font-bold text-sm">Global Collaboration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Statement - Full Width */}
          <div className="md:col-span-3 lg:col-span-6 bg-black/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl hover:shadow-white/5 transition-all duration-500 border-2 border-gray-500/20 hover:border-gray-400/40 group">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-500/20 to-gray-600/20 rounded-xl flex items-center justify-center mx-auto mb-6 border-2 border-gray-500/30 group-hover:border-gray-400/60 transition-all duration-300">
                <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-300 via-sky-300 via-purple-300 to-rose-300 bg-clip-text text-transparent">
                Transforming Tomorrow
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light">
                We envision a world where artificial intelligence serves humanity without barriers. 
                Where every brilliant mind can access the tools they need, and every innovation can find its purpose. 
                Together, we're not just building APIs – we're architecting the future of human-AI collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;