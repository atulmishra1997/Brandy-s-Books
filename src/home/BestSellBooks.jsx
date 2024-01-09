import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const BestSellBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect( () => {
    fetch("https://mern-book-server-9zt6.onrender.com/all-books").then(res => res.json()).then(data => setBooks(data.slice(0,16)))
  }, [])
  return (
    <div className='text-cyan-600'>
      <BookCards books={books} headline="Best Seller Books"/>
    </div>
  )
}

export default BestSellBooks