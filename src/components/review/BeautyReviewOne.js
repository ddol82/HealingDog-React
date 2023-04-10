import "./BeautyReviewOne.css";

const BeautyReviewOne = (props) => {
  const scoreToStar = (score) => {
    let star = "";
    switch (Math.round(score)) {
      case 1:
        star = "✭";
        break;
      case 2:
        star = "✭✭";
        break;
      case 3:
        star = "✭✭✭";
        break;
      case 4:
        star = "✭✭✭✭";
        break;
      case 5:
        star = "✭✭✭✭✭";
        break;
      default:
        star = "☆";
        break;
    }
    return star;
  };

  return (
    <div className="beauty-review-One">
      <div className="beauty-review-top">
        <div className="beauty-review-top-img">이미지</div>
        <div className="beauty-review-top-info">
          {props.nickname} {scoreToStar(props.score)}
        </div>
      </div>
      <div className="beauty-review-body">
        <button>{"<"}</button>
        <div className="beauty-review-comment">{props.content}</div>
        <button>{">"}</button>
      </div>
    </div>
  );
};

export default BeautyReviewOne;
