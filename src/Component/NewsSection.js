"use client"

import Sidebar from "./Sidebar"
import FeaturedCarousel from "./FeaturedCarousel"

export default function NewsSection() {
  return (
    <div className="flex flex-col md:flex-row gap-6 m-4">
      {/* Carousel - 65% width on md and up */}
      <div className="w-full md:w-[65%]">
        <FeaturedCarousel />
      </div>

      {/* Sidebar - 35% width on md and up */}
      <div className="w-full md:w-[35%]">
        <Sidebar />
      </div>
    </div>
  )
}
