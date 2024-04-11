import React, { useState } from "react";
import { ids } from "webpack";

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
        <img src={image} alt={name} />
      </div>
      <h4 className="author" id={`author-${ids}`}>
        {name}
      </h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div>
        <button className="prev-btn" onClick={prevReview}>
          Previous
        </button>
        <button className="next-btn" onClick={nextReview}>
          Next
        </button>
      </div>
      <button className="random-btn" onClick={randomReview}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
