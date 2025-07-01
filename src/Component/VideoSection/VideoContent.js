import React from "react";
import { Youtube } from "lucide-react";
import thumb from "../../Assests/youtubes.webp"


export default function VideoContent({ title, description, thumbnailSrc, thumbnailAlt }) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center">
      {/* Left Content */}
      <div className="space-y-6 lg:w-[40%]">
        {/* YouTube Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Youtube className="w-8 h-8 text-red-600" />
            <span className="text-2xl font-bold text-black">YouTube</span>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md shadow">
            Subscribe
          </button>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 leading-tight">
          {title || "Untitled Video"}
        </h1>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {description || "No description available."}
        </p>
      </div>

      {/* Right Content - Video Thumbnail */}
      <div className="relative lg:w-[60%]">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          {/* Background Image */}
          <img
            loading="lazy"
            src={thumb || "/placeholder.svg"}
            alt={thumb || "Video thumbnail"}
            className="w-full h-full object-cover"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              aria-label="Play video"
              className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors shadow-lg"
            >
              <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
