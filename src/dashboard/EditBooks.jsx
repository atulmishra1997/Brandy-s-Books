import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageURL, bookDescription, bookPDFURL, price} = useLoaderData();

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Psychology",
    "Business",
    "Biography",
    "Self-Help",
    "Personal-Development",
    "Memoir",
    "Science Fiction",
    "Thriller",
    "Horror",
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  //Handle Book Submissions
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    const price = form.price.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
      price,
    };

    //console.log(bookObj);
    //update book data
    fetch(`https://mern-book-server-9zt6.onrender.com/book/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {alert("Book Updated Successfully!")
  });
 
  }

  return (
    <div className="px-4 my-12 bg-teal-400 py-4 rounded-lg">
      <h2 className="mb-8 text-3xl font-bold text-slate-800">Update The Book Data</h2>

      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        <div className="flex gap-8">
          {/* First Row */}
          {/* Book Name */}
          <div className=" lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book Name"
              required
              defaultValue={bookTitle}
            />
          </div>

          {/* Author Name */}
          <div className=" lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name"
              required
              defaultValue={authorName}
            />
          </div>
        </div>
        <div className="flex gap-8">
          {/* 2nd Row */}
          {/* Image URL */}
          <div className=" lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book Image URL"
              required
              defaultValue={imageURL}
            />
          </div>

          {/* Book Category */}
          <div className=" lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            type="Text"
            placeholder="Write Your Book Description..."
            className="w-full"
            name="bookDescription"
            required
            rows={8}
            defaultValue={bookDescription}
          />
        </div>
        {/* book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPDFURL"
            type="text"
            placeholder="Book PDF URL"
            name="bookPDFURL"
            required
            defaultValue={bookPDFURL}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="Price" />
          </div>
          <TextInput
            id="price"
            type="number"
            placeholder="Book Price"
            name="price"
            required
            defaultValue={price}
          />
        </div>
        <Button type="submit" className="mt-5">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks