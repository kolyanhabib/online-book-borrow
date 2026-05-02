import React from "react";
import Marquee from "react-fast-marquee";

const marqueeItems = [
  { id: 1, text: "📚 New Arrival: Atomic Habits" },
  { id: 2, text: "🔥 Trending: The Alchemist" },
  { id: 3, text: "⭐ Top Rated: Deep Work (4.8⭐)" },
  { id: 4, text: "💸 30% OFF on Membership" },
  { id: 5, text: "🎁 Buy 1 Get 1 Free (Limited Time)" },
  { id: 6, text: "⏳ Offer ends tonight!" },
  { id: 7, text: "👥 1,200+ readers joined this week" },
  { id: 8, text: "👉 Browse Books Now" },
];

const BreakingNews = () => {
  return (
    <div className="container mx-auto px-3 py-3">
      <div className="flex items-center gap-4 bg-linear-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-xl px-4 py-3 shadow-lg">
        <button className="bg-black/80 px-4 py-1 rounded-lg font-semibold hover:bg-black transition">
          🔥 Live
        </button>

        <Marquee pauseOnHover speed={75} gradient={false}>
          {marqueeItems.map((item) => (
            <span
              key={item.id}
              className="mx-6 text-sm md:text-base font-medium hover:underline cursor-pointer"
            >
              {item.text}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
