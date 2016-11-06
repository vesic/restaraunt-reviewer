import React from 'react';

const AverageRating = ({stars}) => {
  let ratings = [];
  for (let i = 0; i < stars; i++) {
    ratings.push(<span key={i} className="glyphicon glyphicon-star"></span>);
  }
  return (ratings.length > 0) ? (
    <div className=''>
      {ratings}
    </div>
  ) : (
    <div className=''>
      <span className="glyphicon glyphicon-ban-circle"></span>
    </div>
  );
};

export default AverageRating;
