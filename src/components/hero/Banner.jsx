import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";

const Banner = () => {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
      
      <Image
        src="/banner.jpg"
        alt="Banner"
        fill
        priority
        className="object-cover"
      />

    
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/70"></div>

      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Discover Your Next Favorite Book
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
          Explore thousands of books across science, technology, and stories.
          Borrow, read, and grow your knowledge.
        </p>

        
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/all-books">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 w-full sm:w-auto">
              Browse Books
            </Button>
          </Link>

          <Link href="/signup">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-6 w-full sm:w-auto"
            >
              Join Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
