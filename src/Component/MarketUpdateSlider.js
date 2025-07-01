import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { marketData } from "../Data/mockData" // update the path as needed

export default function MarketUpdateSlider() {
  return (
    <div className="bg-gray-900 text-white py-3 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee flex gap-8">
        {[...marketData, ...marketData].map((coin, index) => (
          <div
            key={`${coin.symbol}-${index}`}
            className="flex items-center space-x-2"
          >
            <span className="font-semibold">{coin.symbol}</span>
            <span className="text-gray-300">${coin.price.toLocaleString()}</span>
            <div
              className={`flex items-center space-x-1 ${
                coin.changePercent24h > 0 ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {coin.changePercent24h > 0 ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span className="text-sm">
                {coin.changePercent24h > 0 ? '+' : ''}
                {coin.changePercent24h.toFixed(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
