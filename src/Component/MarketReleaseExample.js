import MarketReleases from "./MarketRelease";
const MarketReleasesExample = () => {
  const sampleReleases = [
    {
      title: 'Little Pepe presale hits major milestone as stage 3 sells out',
      imageUrl: 'https://via.placeholder.com/64x64?text=PEPE',
      href: '/market/little-pepe-presale',
    },
    {
      title: 'New DeFi token launches with innovative staking mechanism',
      imageUrl: 'https://via.placeholder.com/64x64?text=DEFI',
      href: '/market/defi-token-launch',
    },
    {
      title: 'Crypto gaming platform announces major partnership',
      imageUrl: 'https://via.placeholder.com/64x64?text=GAME',
      href: '/market/gaming-partnership',
    },
  ];

  return (
    <div className="max-w-md mx-auto p-4">
      <MarketReleases releases={sampleReleases} />
    </div>
  );
};

export default MarketReleasesExample;
