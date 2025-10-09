import React, { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [coffeeCount, setCoffeeCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const handleCoffeeClick = () => {
    setCoffeeCount(prev => prev + 1);
  };

  return (
    <footer
      className={`relative overflow-hidden text-white transition-all duration-1000 ease-out 
      bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700/50
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]"
          style={{
            animation: 'pan 20s linear infinite'
          }}
        />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-r from-indigo-500/15 via-purple-500/10 to-pink-500/15 rounded-full blur-3xl animate-orb-float" />
      <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-gradient-to-r from-yellow-500/10 via-orange-500/15 to-red-500/10 rounded-full blur-3xl animate-orb-float-delayed" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-orb-pulse" />

      {/* Connection line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-gray-600 to-transparent" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Social proof section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full border-2 border-gray-900 flex items-center justify-center text-xs font-bold text-white"
                >
                  {item}
                </div>
              ))}
            </div>
            <span className="text-gray-300 text-sm font-medium">
              Trusted by developers worldwide
            </span>
          </div>
        </div>

        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
          {/* Copyright */}
          <div className="flex flex-col items-center lg:items-start gap-2">
            <p className="text-gray-400 text-sm sm:text-base font-medium">
              © {currentYear} <span className="text-gray-200 font-semibold">Tanish Yadav</span>. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Crafting digital experiences that matter
            </p>
          </div>

          {/* Heart and Coffee section */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center justify-center gap-3 text-gray-400">
              <span className="text-sm sm:text-base font-medium">Made with</span>
              <span 
                className="text-red-500 animate-heartbeat cursor-pointer transition-transform hover:scale-110"
                role="img" 
                aria-label="love"
                onClick={handleCoffeeClick}
              >
                ❤️
              </span>
              <span className="text-sm sm:text-base font-medium">and</span>
              <span 
                className="text-yellow-500 transition-all duration-300 hover:scale-110 cursor-pointer"
                role="img" 
                aria-label="coffee"
                onClick={handleCoffeeClick}
              >
                {coffeeCount > 10 ? '🚀' : coffeeCount > 5 ? '⚡' : '☕'}
              </span>
              <span className="text-sm sm:text-base font-medium">
                {coffeeCount > 0 && `×${coffeeCount}`}
              </span>
            </div>
            {coffeeCount > 0 && (
              <p className="text-cyan-400 text-xs animate-fade-in">
                {coffeeCount > 10 ? "Fueled by innovation! 🚀" : 
                 coffeeCount > 5 ? "So much caffeine! ⚡" : 
                 "Thanks for the coffee! ☕"}
              </p>
            )}
          </div>

          {/* Tech stack */}
          <div className="flex flex-col items-center lg:items-end gap-2">
            <p className="text-gray-400 text-sm sm:text-base font-medium">
              Built with <span className="text-cyan-400 font-semibold">React</span> &{" "}
              <span className="text-teal-400 font-semibold">Tailwind CSS</span>
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-gray-800/50 rounded-lg text-xs text-gray-400 border border-gray-700/50">
                ⚡ Fast
              </span>
              <span className="px-2 py-1 bg-gray-800/50 rounded-lg text-xs text-gray-400 border border-gray-700/50">
                🎨 Modern
              </span>
              <span className="px-2 py-1 bg-gray-800/50 rounded-lg text-xs text-gray-400 border border-gray-700/50">
                📱 Responsive
              </span>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-12 pt-6 border-t border-gray-700/30 text-center">
          <p className="text-gray-500 text-xs">
            Passionately crafted in India 🇮🇳
          </p>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        @keyframes pan {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-64px, -64px);
          }
        }
        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        .animate-orb-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-orb-float-delayed {
          animation: float 8s ease-in-out 4s infinite;
        }
        .animate-orb-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        .animate-heartbeat {
          animation: heartbeat 2s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;