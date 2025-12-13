"use client";

import { useEffect, useState } from "react";

export default function BirthdayPage() {
  const [confetti, setConfetti] = useState<Array<{
    id: number;
    x: number;
    y: number;
    color: string;
    delay: number;
  }>>([]);

  useEffect(() => {
    // Create confetti particles
    const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8", "#F7DC6F"];
    const particles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2,
    }));
    setConfetti(particles);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 dark:from-pink-900 dark:via-purple-900 dark:to-blue-900 overflow-hidden">
      {/* Confetti */}
      {confetti.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-3 h-3 rounded-full animate-bounce"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 py-12 animate-fade-in">
        {/* Balloons */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="animate-bounce" style={{ animationDelay: "0s", animationDuration: "2s" }}>
            <div className="text-6xl">🎈</div>
          </div>
          <div className="animate-bounce" style={{ animationDelay: "0.3s", animationDuration: "2.2s" }}>
            <div className="text-6xl">🎉</div>
          </div>
          <div className="animate-bounce" style={{ animationDelay: "0.6s", animationDuration: "1.8s" }}>
            <div className="text-6xl">🎊</div>
          </div>
        </div>

        {/* Birthday Message */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
          🎂 Happy Birthday! 🎂
        </h1>

        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 font-semibold">
            Wishing you an amazing day filled with joy, laughter, and celebration! 🎁
          </p>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
            May all your dreams come true and your year ahead be filled with success and happiness! ✨
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-8">
            🎈 Here's to another fantastic year! 🎈
          </p>
        </div>

        {/* Cake */}
        <div className="mt-12 animate-bounce" style={{ animationDuration: "3s" }}>
          <div className="text-8xl">🎂</div>
        </div>

        {/* Back Button */}
        <a
          href="/"
          className="mt-12 inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg"
        >
          ← Back to Home
        </a>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}

