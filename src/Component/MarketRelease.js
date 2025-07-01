import React from 'react';

const MarketReleases = ({ releases }) => {
  const handleReleaseClick = (href) => {
    window.location.href = href;
  };

  // Only use the first release
  const release = releases[0];

  if (!release) return null; // In case the array is empty

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Market Releases</h2>
        <span className="text-sm text-gray-500">Ad</span>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => handleReleaseClick(release.href)}
      >
        <div className="p-4">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gray-700 rounded flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img
                src={release.imageUrl || 'https://via.placeholder.com/64x64?text=IMG'}
                alt={release.title}
                width={64}
                height={64}
                className="rounded object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/64x64?text=IMG';
                }}
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-sm mb-1 hover:text-blue-600 transition-colors">
                {release.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketReleases;
