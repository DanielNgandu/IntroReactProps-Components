//import react and reactDOM
import React from "react";


//import faker js
// import Faker from "faker";


const ApprovalCard=(props)=>{
    console.log(props);
    return(
<div className="ui cards">
  <div className="card">
    <div className="content">
      <div className="header">
          {props.children.author}
      </div>
      <div className="meta">
      </div>
      <div className="description">
        {props.children}
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
  </div>
    );
};

export default ApprovalCard;