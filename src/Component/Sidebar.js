"use client"

import { useState } from "react"
import { Eye } from "lucide-react"

const editorChoiceStories = [
  { title: "Texas makes gold, silver legal tender following governor's approval", views: 1245 },
  { title: "Record Q2, monthly close next? 5 things to know in Bitcoin this week", views: 889 },
  { title: "Bitcoin 'bull pennant' eyes $165K, Pomp scoops up $386M BTC; Hodler's Digest, June 22 – 28", views: 1320 },
  { title: "US home mortgage regulator considers Bitcoin amid housing crisis", views: 678 },
]

const hotStories = [
  { title: "Crypto market cap hits $2.5T as Bitcoin surges past $70K", views: 2120 },
  { title: "Ethereum ETF approval sparks institutional interest", views: 1845 },
  { title: "DeFi protocols see record TVL growth in Q2", views: 960 },
  { title: "Major bank announces Bitcoin custody services", views: 745 },
]

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("editor")

  const activeStyles =
    "bg-yellow-500 text-black hover:bg-yellow-600 border-b-4 border-yellow-500 text-base"
  const inactiveStyles =
    "text-black hover:bg-gray-100 bg-transparent text-base"

  const renderStories = (stories) =>
    stories.map((story, index) => (
      <div
        key={index}
        className="border-b border-gray-200 pb-3 last:border-b-0 flex justify-between items-start"
      >
        <h3 className="text-black text-[15px] leading-relaxed cursor-pointer hover:font-semibold hover:text-black transition-colors max-w-[80%]">
          {story.title}
        </h3>
        <div className="flex items-center space-x-1 text-gray-500 text-xs">
          <Eye className="w-4 h-4" />
          <span>{story.views}</span>
        </div>
      </div>
    ))

  return (
    <div className="bg-white rounded-lg overflow-hidden h-auto flex flex-col border border-gray-200">
      {/* Tabs */}
      <div className="flex">
        <button
          className={`flex-1 py-2 px-4 font-medium transition-colors ${
            activeTab === "editor" ? activeStyles : inactiveStyles
          }`}
          onClick={() => setActiveTab("editor")}
        >
          Editor's choice
        </button>
        <button
          className={`flex-1 py-2 px-4 font-medium transition-colors ${
            activeTab === "hot" ? activeStyles : inactiveStyles
          }`}
          onClick={() => setActiveTab("hot")}
        >
          Hot stories
        </button>
      </div>

      {/* Story list */}
      <div className="p-4 space-y-4">
        {activeTab === "editor" && renderStories(editorChoiceStories)}
        {activeTab === "hot" && renderStories(hotStories)}
      </div>
    </div>
  )
}
