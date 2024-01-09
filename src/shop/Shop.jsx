import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://mern-book-server-9zt6.onrender.com/all-books")
      .then((res) => res.json())
      .then(data => setBooks(data));
  }, []);
  return (
    <div className=" px-4 lg:px-24 py-10 bg-cyan-600">
      <h2 className="text-5xl font-bold text-center text-slate-800">
        All Books Are Here
      </h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <Card key={book._id}>
            <img src={book.imageURL} alt="" className="h-80" />
            <h5 className="text-2xl font-bold tracking-tight text-cyan-900 dark:text-white h-[3.5rem]">
              <p>{book.bookTitle}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-ellipsis">
              {book.bookDescription.slice(0, 100)} <button className="text-cyan-500">See More</button>
            </p>
            <div className=' text-slate-800'>
                        <p>₹{book.price}/-</p>
                       </div>
            <button className=" bg-cyan-800 font-semibold text-white py-2 rounded-lg">
              Buy Now
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
