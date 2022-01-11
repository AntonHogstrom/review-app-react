import ReviewComponent from "../components/Review";
import reviewApiService from "../api-service/review.js";
import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Review = (props) => {
  const [searchParams] = useSearchParams();
  const reviewIdPara = searchParams.get("id");

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    //Get review with id from url
    //Display review
    reviewApiService
      .find(reviewIdPara, "_id")
      .then((Response) => {
        console.log(Response.data);
        setReviews(Response.data.reviews);
      })
      .catch((Err) => {
        console.log(Err);
      });
  }, [reviewIdPara]);

  const deleteReview = (e) => {
    //delete review with id from url
    reviewApiService
      .delete("?id=" + reviewIdPara)
      .then((Response) => {
        console.log(Response.data);
      })
      .catch((Err) => {
        console.log(Err);
      });
  };
  return (
    <section>
      {reviews.map((review) => (
        <ReviewComponent
          deleteReview={deleteReview}
          key={review._id}
          _id={review._id}
          gameTitle={review.gameTitle}
          reviewTitle={review.reviewTitle}
          review={review.review}
          reviewRating={review.reviewRating}
          gameGenre={review.gameGenre}
          reviewDate={review.reviewDate}
          author={review.author}
        />
      ))}
    </section>
  );
};

export default Review;
