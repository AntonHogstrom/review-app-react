import "./ReviewShort.css";
import { Link } from "react-router-dom";

//review short component that displays less information
//for the reviews page
const ReviewShort = (props) => {
  return (
    <div className="reviewShortDiv">
      <h2>{props.reviewTitle}</h2>
      <p className="gameTitle">{props.gameTitle}</p>
      <p>{props.reviewDate ? props.reviewDate.slice(0, 10) : ""}</p>
      <p>{props.author}</p>
      <Link to={`/reviews/${props._id}?id=${props._id}`}>
        <button>Read More</button>
      </Link>
    </div>
  );
};

export default ReviewShort;
