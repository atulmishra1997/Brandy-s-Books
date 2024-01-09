import React, { useEffect, useState } from 'react'

const Blog = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("https://mern-book-server-9zt6.onrender.com/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  return (
    <section className="py-12 bg-teal-400">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Latest Blog Posts
        </h2>
      </div>
      <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-2 lg:max-w-none md:grid-cols-1">
        {allBooks.map((book) => (
          <div
            key={book._id}
            className="bg-slate-200 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {book.bookTitle}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                By {book.authorName}
              </p>
              <p className="text-gray-700">{book.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

export default Blog