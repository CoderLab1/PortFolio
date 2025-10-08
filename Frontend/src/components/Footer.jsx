import React, { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after mount
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const handleQuickLinkClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer
      className={`relative overflow-hidden text-white transition-all duration-700 ease-out 
      bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px] animate-pulse-slow" />
      </div>

      {/* Gradient Orbs (soft glow effects) */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-r from-yellow-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-delayed" />

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
          <p className="text-gray-400 text-sm sm:text-base font-medium">
            © {currentYear} <span className="text-gray-200">Tanish Yadav</span>. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span className="text-sm sm:text-base font-medium">Crafted with</span>
            <span className="text-red-500 animate-pulse" role="img" aria-label="love">
              ❤️
            </span>
            <span className="text-sm sm:text-base font-medium">and lots of</span>
            <span className="text-yellow-500" role="img" aria-label="coffee">
              ☕
            </span>
          </div>

          <p className="text-gray-400 text-sm sm:text-base font-medium">
            Built with <span className="text-cyan-400">React</span> &{" "}
            <span className="text-teal-400">Tailwind CSS</span>
          </p>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out 3s infinite;
        }
        .animate-pulse-slow {
          animation: pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
