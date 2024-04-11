import React, { useState } from "react";

const Review = (props) => {
  const [index, setIndex] = useState(0);
  const { reviews } = props;
  const { image, text, job, id, name } = reviews[index];

  const checkIndex = (number) => {
    if (number < 0) {
      return reviews.length - 1;
    } else if (number >= reviews.length) {
      return 0;
    }
    return number;
  };

  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      console.log(newIndex);
      return checkIndex(newIndex);
    });
  };

  const prevReview = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const randomReview = () => {
    let newIndex = Math.floor(Math.random() * reviews.length);
    if (newIndex === index) {
      newIndex = checkIndex(newIndex + 1);
    }
    setIndex(newIndex);
  };

  return (
    <article className="review">
      <div className="person-img">
        <img src={image} />
      </div>
      <div className="left">
        <h4 className="author" id={`author-${id}`}>
          {name}
        </h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-grp">
          <button onClick={prevReview} className="prev-btn">
            Previous
          </button>

          <button onClick={nextReview} className="next-btn">
            Forward
          </button>
        </div>
        <button className="random-btn" onClick={randomReview}>
          surprise me
        </button>
      </div>
    </article>
  );
};

export default Review;
