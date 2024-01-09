import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect( () => {
      fetch("https://mern-book-server-9zt6.onrender.com/all-books").then(res => res.json()).then(data => setBooks(data.slice(16,27))
    )
    }, [])
    return (
      <div className='text-cyan-600'>
        <BookCards books={books} headline="Other Books"/>
      </div>
    )
}

export default OtherBooks