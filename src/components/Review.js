import { useNavigate } from "react-router-dom";
import "./Review.css";

//review component for displaying a single review
//taking props from outside of component
const ReviewComponent = (props) => {
  const navigate = useNavigate();

  return (
    <section id="review">
      <h1>{props.reviewTitle}</h1>
      <p className="gameTitle">{props.gameTitle}</p>
      <p className="gameTitle">{props.gameGenre}</p>
      <p id="reviewText">{props.review}</p>
      <p>Rating: {props.reviewRating}</p>
      <p>{props.reviewDate ? props.reviewDate.slice(0, 10) : ""}</p>
      <p className="gameTitle">{props.author}</p>
      <button
        onClick={() => {
          props.deleteReview();
          navigate("/reviews");
        }}
      >
        Delete
      </button>
    </section>
  );
};

export default ReviewComponent;
