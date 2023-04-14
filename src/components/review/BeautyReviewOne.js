import "./BeautyReviewOne.css";

const BeautyReviewOne = (props) => {
  const scoreToStar = (score) => {
    let star = "";
    switch (Math.round(score)) {
      case 1:
        star = "✭☆☆☆☆";
        break;
      case 2:
        star = "✭✭☆☆☆";
        break;
      case 3:
        star = "✭✭✭☆☆";
        break;
      case 4:
        star = "✭✭✭✭☆";
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

  // 시간변환
  function elapsedTime(date) {
    const start = new Date(date);
    const end = new Date();

    const diff = (end - start) / 1000;

    const times = [
      { name: "년", milliSeconds: 60 * 60 * 24 * 365 },
      { name: "개월", milliSeconds: 60 * 60 * 24 * 30 },
      { name: "일", milliSeconds: 60 * 60 * 24 },
      { name: "시간", milliSeconds: 60 * 60 },
      { name: "분", milliSeconds: 60 },
    ];

    for (const value of times) {
      const betweenTime = Math.floor(diff / value.milliSeconds);

      if (betweenTime > 0) {
        return `${betweenTime}${value.name} 전`;
      }
    }
    return "방금 전";
  }

  const onclickHandlerMinus = () => {
    if (props.num > 0) {
      props.setNum(props.num - 1);
    }
  };
  const onclickHandlerPlus = () => {
    if (props.num >= 0 && props.num < beautyReviewListLength) {
      props.setNum(props.num + 1);
    }
  };
  const beautyReviewListLength = props.beautyReviewList?.length - 1;

  return (
    <div className="beauty-review-One">
      <div className="beauty-review-wrap">
        <button className="beauty-review-btn" onClick={onclickHandlerMinus}>
          {"<"}
        </button>
        <div className="beauty-review-center">
          <div className="beauty-review-top">
            <div className="beauty-review-top-img"></div>
            <div className="beauty-review-top-info">
              <div className="beauty-review-name">{props.nickname}</div>
              <div className="beauty-review-info2">
                <div className="beauty-review-score">
                  {scoreToStar(props.score)}
                </div>
                <div className="beauty-review-date">
                  {elapsedTime(props.registDate)}
                </div>
              </div>
            </div>
          </div>
          <div className="beauty-review-body">
            <div className="beauty-review-comment">{props.content}</div>
          </div>
        </div>
        <button className="beauty-review-btn" onClick={onclickHandlerPlus}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default BeautyReviewOne;
