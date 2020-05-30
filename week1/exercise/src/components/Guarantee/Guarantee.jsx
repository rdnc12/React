import React from 'react';

const Guarantee=(props)=> {

    const { img, title, description }=props;

  return (
    <div className="col-md-4">
      <img src={img} alt={title + ' icon'} />
      <h6> title: {title} </h6>
      <p>description:{description}</p>
    </div>
  );
}

export default Guarantee;