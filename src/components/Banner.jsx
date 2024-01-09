import React, { useRef } from "react";
import BannerSlide from "../home/BannerSlide";
import {useNavigate} from 'react-router-dom';

const Banner = () => {
  const searchRef = useRef();
  const navigate = useNavigate()
  const onClickHandler = () => {
    const search = searchRef.current.value;
    fetch(`https://mern-book-server-9zt6.onrender.com/book/find-by-name/${search}`)
      .then((res) => res.json())
      .then((data) => {
        navigate('/book/'+data._id.toString())
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className=" px-4 lg:px-24 bg-teal-400 flex items-center">
      <div className=" flex w-full flex-col md:flex-row justify-between items-center gap-12 py-16">
        {/* left side */}
        <div className=" md:w-1/2 space-y-8 h-full">
          <h2 className=" text-5xl font-bold leading-snug text-slate-900">
            Buy and Sell Your Books:
            <span className=" text-cyan-800">  For The Best Prices</span>
          </h2>
          <p className="text-base  text-black text-justify">
            Explore the exciting journey of buying and selling your beloved
            books with us. Whether you're on the lookout for a captivating
            novel, a scholarly masterpiece, or hoping to part ways with some
            cherished titles, our platform provides a space for book enthusiasts
            to connect. Embrace the joy of discovering new stories or find a new
            home for your well-loved volumes. Join us in fostering a community
            where the love for literature and the thrill of transactions
            converge, making the process of buying and selling books a
            delightful experience.
          </p>
          <p className="text-2xl font-bold text-slate-900">
            <br />
            Happy reading and trading!
          </p>
          <div>
            <input
              ref={searchRef}
              type="search"
              name="search"
              id="search"
              placeholder="Search A Book"
              className="py-2 px-2 rounded-lg outline-none"
            />
            <button
              onClick={onClickHandler}
              className=" bg-cyan-800 px-6 py-2 text-white font-medium hover:bg-black
                     transition-all ease-in duration-200 rounded-md"
            >
              Search
            </button>
          </div>
        </div>

        {/* right side */}
        <div>
          <BannerSlide />
        </div>
      </div>
    </div>
  );
};

export default Banner;
