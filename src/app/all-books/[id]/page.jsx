import BorrowButton from "@/components/button/BorrowButton";
import Image from "next/image";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  const numericId = Number(id);

  const res = await fetch("https://demo-server-elfk.onrender.com/books", {
    cache: "no-store",
  });

  const books = await res.json();
  const book = books.find((b) => Number(b.id) === numericId);

  if (!book) {
    return (
      <div className="text-center py-20 text-red-500 text-xl font-semibold">
        Book not found 
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
        <div className="relative w-full aspect-3/4 rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={book.image_url}
            fill
          
            alt={book.title}
            className="object-cover"
            priority
          />

        
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-70" />
        </div>

        
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 space-y-5">
          
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {book.title}
          </h1>

      
          <p className="text-gray-600 text-lg">
            By{" "}
            <span className="font-semibold text-gray-800">{book.author}</span>
          </p>

          
          {book.category && (
            <span className="inline-block bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full font-medium">
              {book.category}
            </span>
          )}

        
          <p className="text-gray-500 leading-relaxed text-sm md:text-base">
            {book.description}
          </p>

          
          <div className="flex items-center justify-between">
            <p className="text-green-600 font-semibold text-lg">
               {book.available_quantity} copies available
            </p>

            {book.available_quantity <= 3 && (
              <span className="text-red-500 text-sm font-medium">
                ⚡ Low stock
              </span>
            )}
          </div>

        
          <div className="border-t pt-4"></div>

          
          <div>
            <BorrowButton available={book.available_quantity} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailsPage;
