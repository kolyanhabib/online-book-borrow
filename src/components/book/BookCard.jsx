import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
  return (
    <Card className="rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 bg-linear-to-b from-white to-purple-50">
      <div className="relative w-full aspect-3/4 overflow-hidden group">
        <Image
          src={book.image_url}
          fill
          alt={book.title}
          sizes="(max-width: 640px) 100vw, 
          
         (max-width: 1024px) 50vw, 
         (max-width: 1280px) 33vw, 
         25vw"
          className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />

        <Chip size="sm" className="absolute right-2 top-2">
          {book.category}
        </Chip>
      </div>

      <div className="p-4 space-y-2">
        <h2 className="font-bold text-[18px] line-clamp-1">{book.title}</h2>

        <p className="text-base font-medium text-gray-500 line-clamp-1">{book.author}</p>

        

        <Link href={`/all-books/${book.id}`} className="block">
          <Button
            variant="outline"
            className="w-full border-gray-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300"
          >
            View Details
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default BookCard;
