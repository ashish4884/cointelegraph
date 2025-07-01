import React from "react";
import market1 from "../Assests/market.png";
import press11 from "../Assests/press1.png";
import press22 from "../Assests/press2.png";

const PressReleases = () => {
  const pressReleases = [
    {
      title:
        'Deribit and SignalPlus launch "The Summer Chase" competition featuring a $300,000 prize...',
      image: press11,
    },
    {
      title: "Neo Pepe NEOP presale passes $2M raised with stellar CertiK audit",
      image: press22,
    },
  ];

  const marketReleases = [
    {
      title:
        "Little Pepe presale goes live on June 10: Complete guide to buying LILPEPE",
      image: "https://via.placeholder.com/120x80",
    },
  ];

  return (
    <div className="mt-8 flex gap-6 bg-white p-8">
      {/* Press Releases - 70% */}
      <div className="w-[64%]">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-black text-lg font-bold border-b-2 border-yellow-500 pb-1">
            Press Releases
          </h2>
          <span className="text-gray-600 text-xs">Ad</span>
        </div>

        <div className="flex gap-3 overflow-x-auto">
          {pressReleases.map((release, index) => (
            <div
              key={index}
              className="min-w-[280px] flex space-x-3 bg-gray-100 p-3 rounded-lg shadow-sm"
            >
              <img
                src={release.image}
                alt="press release"
                width={100}
                height={70}
                className="rounded object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-black text-sm font-medium leading-snug">
                  {release.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Market Releases - 30% */}
      <div className="w-[30%]">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-black text-lg font-bold border-b-2 border-yellow-500 pb-1">
            Market Releases
          </h2>
          <span className="text-gray-600 text-xs">Ad</span>
        </div>

        <div className="flex gap-3 overflow-x-auto">
          {marketReleases.map((release, index) => (
            <div
              key={index}
              className="min-w-[280px] flex space-x-3 bg-gray-100 p-3 rounded-lg shadow-sm"
            >
              <img
                src={market1}
                alt="market release"
                width={100}
                height={70}
                className="rounded object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-black text-sm font-medium leading-snug">
                  {release.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PressReleases;
