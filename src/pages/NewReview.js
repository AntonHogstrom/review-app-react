import reviewApiService from "../api-service/review.js";
import React, { useState } from "react";
import "./NewReview.css";

const NewReview = () => {
  //new review default state
  const reviewState = {
    reviewTitle: "",
    gameTitle: "",
    gameGenre: "",
    review: "",
    reviewRating: "",
    author: "",
    reviewDate: "",
  };
  const [review, setReview] = useState(reviewState);

  const handleInputChange = (e) => {
    //set review state to the values of the inputs
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const createReview = async (e) => {
    e.preventDefault();
    const reviewData = {
      //create review data object from review state
      //if data field is empty fill out with a default value
      gameTitle: review.gameTitle ? review.gameTitle : "No Title???",
      gameGenre: review.gameGenre ? review.gameGenre : "UNKNOWN",
      reviewTitle: review.reviewTitle
        ? review.reviewTitle
        : "Some unspecified title",
      review: review.review ? review.review : "This is not a review",
      reviewRating: review.reviewRating ? review.reviewRating : 1337,
      author: review.author ? review.author : "Anonymous",
    };
    console.log(reviewData);
    await reviewApiService.create(reviewData);
    //go to /reviews
    window.location.href = "/reviews";
  };

  return (
    <section id="newReviewSection">
      <h2>Create a review!</h2>

      <form id="addReviewForm">
        <label htmlFor="gameTitle">Game Titel:</label>
        <input
          id="gameTitleInput"
          name="gameTitle"
          type="text"
          placeholder="Game Title"
          required
          value={review.gameTitle}
          onChange={handleInputChange}
        />
        <label htmlFor="gameGenre">Game Genre:</label>
        <input
          id="gameGenreInput"
          name="gameGenre"
          type="text"
          placeholder="Game Genre"
          required
          value={review.gameGenre}
          onChange={handleInputChange}
        />
        <label htmlFor="reviewTitle">Review Title:</label>
        <input
          id="reviewTitleInput"
          name="reviewTitle"
          type="text"
          placeholder="Review Title"
          required
          value={review.reviewTitle}
          onChange={handleInputChange}
        />
        <label htmlFor="review">Review:</label>
        <textarea
          id="reviewInput"
          name="review"
          placeholder="Review Text"
          required
          value={review.review}
          onChange={handleInputChange}
        ></textarea>
        <label htmlFor="reviewRating">Rate this Game:</label>
        <input
          id="reviewRatingInput"
          name="reviewRating"
          type="number"
          min={0}
          max={10}
          required
          value={review.reviewRating}
          onChange={handleInputChange}
        />
        <label htmlFor="author">Author:</label>
        <input
          id="authorInput"
          name="author"
          type="text"
          required
          placeholder="Author"
          value={review.author}
          onChange={handleInputChange}
        />
        <input
          value="Create Review"
          id="submitReviewButton"
          onClick={createReview}
          type="submit"
        />
      </form>
    </section>
  );
};

export default NewReview;
