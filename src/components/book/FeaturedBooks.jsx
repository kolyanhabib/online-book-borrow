import BookCard from "@/components/book/BookCard";

const FeaturedBooks = async () => {
  const res = await fetch("https://demo-server-elfk.onrender.com/books");

  const books = await res.json();
  const featured = books.slice(0, 4);

  return (
    <section className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Featured Books
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featured.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
