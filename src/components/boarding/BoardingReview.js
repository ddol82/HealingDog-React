import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    callSelectBoardingReviewAPI
 } from "apis/BoardingAPICalls ";
 import "./BoardingReview.css";

function BoardingReview() {

    //redux
    const dispatch = useDispatch();
    const getBoardingReviewSummary= useSelector((state) => state.boardingReviewReducer.data);

    // useState
    const [form, setForm] = useState({
        reviewCount: "",
        scoreAverage: ""
    });

    //useEffect
    useEffect(
        () => {
            console.log(`[component-rendering] : BoardingReview`);
            if (!getBoardingReviewSummary == true) {
                dispatch(callSelectBoardingReviewAPI())
            }
        }, // eslint-disable-next-line
        []
    );

    useEffect(
        () => {
            if (!getBoardingReviewSummary != true) {
                console.log(getBoardingReviewSummary);
                setForm({
                    reviewCount: getBoardingReviewSummary.reviewCount,
                    scoreAverage: getBoardingReviewSummary.scoreAverage
                });
            }            
        }, // eslint-disable-next-line
        [getBoardingReviewSummary]
    );

    //event handler
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
        <>
            <div className="score-average">평점 {form.scoreAverage}/5.0  {scoreToStar(form.scoreAverage)}</div>
            <div className="review-count">리뷰 {form.reviewCount} 개</div>            
        </>
    )
}

export default BoardingReview;