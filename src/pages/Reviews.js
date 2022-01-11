import ReviewShort from "../components/ReviewShort";
import React, { useState, useEffect } from "react";
import reviewApiService from "../api-service/review.js";
import "./Reviews-page.css";

//reviews page, multiple reviews
const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);
  const [searchGameTitle, setSearchGameTitle] = useState("");
  const [searchAuthor, setsearchAuthor] = useState("");
  const [searchGenre, setSearchGenre] = useState("");

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState();

  //set pagination
  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  //set pagination
  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  useEffect(() => {
    //get all reviews
    //runs after api call
    //runs again when page changes
    retrieveReviews(page);
  }, [page]);

  const onChangeSearchGameTitle = (e) => {
    //set searchGameTitle
    setSearchGameTitle(e.target.value);
  };

  const onChangeSearchAuthor = (e) => {
    //set searchAuthor
    setsearchAuthor(e.target.value);
  };

  const onChangeSearchGenre = (e) => {
    //set searchGenre
    setSearchGenre(e.target.value);
  };

  const retrieveReviews = async (page) => {
    //get all reviews
    reviewApiService
      .getAll(page)
      .then((Response) => {
        console.log(Response.data);
        setReviews(Response.data.reviews);
        //set totalPages
        setTotalPages(
          Math.ceil(Response.data.total_reviews / Response.data.per_page)
        );
      })
      .catch((Err) => {
        console.log(Err);
      });
  };

  const search = (query, by, page) => {
    //search reviews
    reviewApiService
      //search with parameters
      .find(query, by, page)
      .then((Response) => {
        console.log(Response.data);
        setReviews(Response.data.reviews);
        //set totalPages
        setTotalPages(
          Math.ceil(Response.data.total_reviews / Response.data.per_page)
        );
      })
      .catch((Err) => {
        console.log(Err);
      });
  };

  const findGameTitle = (e) => {
    //search reviews by game title
    search(searchGameTitle, "gameTitle");
    e.preventDefault();
    const input = document.getElementById("gameTitleInput");
    input.value = "";
  };

  const findAuthor = (e) => {
    //search reviews by author
    search(searchAuthor, "author");
    e.preventDefault();
    const input = document.getElementById("authorInput");
    input.value = "";
  };

  const findGenre = (e) => {
    //search reviews by genre
    search(searchGenre, "genre");
    e.preventDefault();
    const input = document.getElementById("genreInput");
    input.value = "";
  };

  return (
    <>
      <form id="form">
        <input
          onChange={onChangeSearchGameTitle}
          type="text"
          name="gameTitleInput"
          id="gameTitleInput"
          placeholder="Game Title"
        />
        <input type="submit" value="Search" onClick={findGameTitle} />
        <input
          onChange={onChangeSearchGenre}
          type="text"
          name="genreInput"
          id="genreInput"
          placeholder="Genre"
        />
        <input type="submit" value="Search" onClick={findGenre} />
        <input
          onChange={onChangeSearchAuthor}
          type="text"
          name="authorInput"
          id="authorInput"
          placeholder="Author"
        />
        <input type="submit" value="Search" onClick={findAuthor} />
        <input
          id="showAll"
          type="submit"
          value="Show All"
          onClick={reviewApiService.getAll}
        />
      </form>

      <section id="reviewSection">
        <div id="h1Div">
          <h1>REVIEWS</h1>
        </div>
        {reviews.map((review) => (
          <ReviewShort
            key={review._id}
            _id={review._id}
            gameTitle={review.gameTitle}
            reviewTitle={review.reviewTitle}
            rating={review.reviewRating}
            genre={review.genre}
            reviewDate={review.reviewDate}
            author={review.author}
          />
        ))}
        <div id="paginationDiv">
          <div id="nextPrevDiv">
            <button id="prev" onClick={() => prevPage()}>
              Prev
            </button>
            <button id="next" onClick={() => nextPage()}>
              Next
            </button>
          </div>
          <div id="paginationNumberDiv">
            <ul>
              {Array.from(Array(totalPages).keys()).map((page) => (
                <li key={page}>
                  <button
                    onClick={() => {
                      setPage(page);
                    }}
                  >
                    {page + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
