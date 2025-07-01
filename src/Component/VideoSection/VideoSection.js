import VideoContent from "./VideoContent";

export default function VideoSection() {
  const videoData = {
    title: "Bitcoin Treasuries: Fueling the Next Bull Run — or the Next Blowup?",
    description:
      "Bitcoin treasury companies are rewriting the rules of corporate finance—using debt and equity to buy Bitcoin, drive up stock prices, and repeat the cycle. In this video, we explore the strategy pioneered by Michael Saylor, how it's fueling Bitcoin's rise, and the hidden risks that could turn this boom into a bust.",
    thumbnailSrc: "/images/crypto-thumbnail.webp",
    thumbnailAlt: "Bitcoin $500K or Bust video thumbnail",
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg border border-red-200 p-8">
        <VideoContent {...videoData} />
      </div>
    </main>
  )
}
