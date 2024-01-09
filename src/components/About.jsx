import React from "react";
import BookImg from "../assets/awardbooks.png"

const About = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 px-4 lg:px-24 bg-teal-400 gap-10 items-center ">
      <div className=" w-full  justify-between items-center gap-12 mt-14 mb-10">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4  text-xl text-black mx-auto text-justify">
            Welcome to <span className=" text-xl font-bold text-slate-700 ">Brandy's Books</span>
            , a haven for book enthusiasts and avid readers alike! At <span className="text-xl font-bold text-slate-700 ">
              Brandy's Books
            </span>
            , we understand the magic that unfolds within the pages of a book.
            Developed by <span className="text-xl font-bold text-slate-700 ">"Atul Mishra".</span> Our platform is dedicated to fostering a community where individuals
            passionate about books can connect, explore, and share their love
            for literature. Whether you're a book lover seeking your next
            literary adventure or a seller looking to share your collection with
            fellow bookworms, we provide a seamless experience to buy and sell
            books of various genres and interests. Our mission is to create a
            space where the joy of discovering new stories, gaining knowledge,
            and immersing oneself in diverse narratives is made accessible to
            everyone. With a vast array of titles available, from timeless
            classics to contemporary bestsellers, we aim to cater to every
            reader's preferences. Join us in celebrating the joy of reading, the
            thrill of finding hidden literary gems, and the satisfaction of
            passing on cherished stories to new hands. Thank you for being a
            part of our book-loving community at
            <span className="text-xl font-bold text-slate-700 ">
              Brandy's Books
            </span>
            . Let's embark on a literary journey together! Happy reading!
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center mb-10" >
        <img className=" w-[15rem] md:w-[30rem]" src={BookImg} alt="" />
      </div>
    </section>
  );
};

export default About;
