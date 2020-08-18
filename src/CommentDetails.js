//import react and reactDOM
import React from "react";

import Faker from "faker";

const CommentDetails = (props) => {
  console.log(props);
  return (
    <div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={Faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">{props.date}</span>
          </div>
          <div className="text">{props.text}</div>
        </div>
      </div>
    </div>
  );
};

//make component global

export default CommentDetails;
