import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { callSelectReviewsAPI } from "../../apis/ReivewAPICalls";

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
      dispatch(callSelectReviewsAPI(params));
      console.log(`[component-rendering] : Review`);
    }, // eslint-disable-next-line
    []
  );

  // event-handler

  return (
    <div className="reivews-wrapper">
      {Array.isArray(getReviews) &&
        getReviews.map((review) => (
          <div className="review" key={review.reviewsCode}>
            <h3>{`${review.score}`}</h3>
            <p>{`${review.registDate}`}</p>
            <p>{`${review.content}`}</p>
          </div>
        ))}
    </div>
  );
}

export default Review;
