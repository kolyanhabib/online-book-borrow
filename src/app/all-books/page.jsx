"use client";

import { useEffect, useState } from "react";
import BookCard from "@/components/book/BookCard";
import SearchBar from "@/components/searchbar/SearchBar";
import CategorySidebar from "@/components/category/CategorySidebar";

const AllBooksPage = () => {
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");


  useEffect(() => {
    fetch("https://demo-server-elfk.onrender.com/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);


  const filteredBooks = books.filter((book) => {
    const matchCategory =
      category === "All" ||
      book.category.toLowerCase() === category.toLowerCase();

    const matchSearch = book.title.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
    
      <SearchBar setSearch={setSearch} />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        <CategorySidebar selected={category} setSelected={setCategory} />

        
        <div className="lg:col-span-3">
          <h1 className="text-2xl font-bold mb-6">
            {category !== "All" ? `${category} Books` : "All Books"}
          </h1>

          {filteredBooks.length === 0 ? (
            <p className="text-center text-gray-500 py-10">No books found 😢</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllBooksPage;
