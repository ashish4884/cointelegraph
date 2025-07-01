import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import carouselImage from "../Assests/carouselImg.png"

const FeaturedCarousel = () => {
  return (
    <div className="relative bg-gray-800 rounded-lg overflow-hidden">
      <div className="relative h-96">
        <img
          src={carouselImage}
          alt="Bitcoin and housing illustration"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-white text-3xl font-bold mb-4 leading-tight">
            US home mortgage regulator considers Bitcoin amid housing crisis
          </h1>

          <div className="flex items-center space-x-4 text-sm">
            <span className="bg-yellow-500 text-black px-3 py-1 rounded font-medium">
              Features
            </span>
            <span className="text-gray-300">by Aaron Wood</span>
            <span className="text-gray-300">Jun 25, 2025</span>
          </div>
        </div>

        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-black/20 p-2 rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-black/20 p-2 rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedCarousel;
