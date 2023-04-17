import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { callSelectReviewsAPI } from "../../apis/ReivewAPICalls";
import "./Review.css";

function Review() {
  // Using url parameter
  const params = useParams();

  // redux
  const dispatch = useDispatch();
  const getReviews = useSelector((state) => state.reviewReducer.data);

  // useState

  // useEffect
  useEffect(
    () => {
      console.log(`[component-rendering] : Review`);
      if (getReviews == null) {
        console.log(`[dispatch] : callSelectReviewsAPI`);
        dispatch(callSelectReviewsAPI(params));
      }
    }, // eslint-disable-next-line
    []
  );

  // event-handler
  // 별점반환
  const scoreToStar = (score) => {
    let star = "";
    switch (Math.round(score)) {
      case 1:
        star = "⭐";
        break;
      case 2:
        star = "⭐⭐";
        break;
      case 3:
        star = "⭐⭐⭐";
        break;
      case 4:
        star = "⭐⭐⭐⭐";
        break;
      case 5:
        star = "⭐⭐⭐⭐⭐";
        break;
      default:
        star = "☆";
        break;
    }
    return star;
  };

  return (
    <div className="reivews-wrapper">
      {Array.isArray(getReviews) &&
        getReviews.map((review) => (
          <div className="review" key={review.reviewsCode}>
            <div className="review-user">
              <span className="review-user-regdate">{`${review.registDate.substring(
                0,
                10
              )}`}</span>
              <span className="review-user-star">
                {scoreToStar(review.score)}
              </span>
            </div>
            <div className="review-image">
              <h1>Image</h1>
            </div>
            <div className="review-contest">
              <p>{`${review.content}`}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Review;
