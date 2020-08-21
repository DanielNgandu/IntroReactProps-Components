//import react and reactDOM
import React from "react";
import ReactDOM from "react-dom";

//import our custom components
import CommentDetails from "./CommentDetails";

import ApprovalCard from "./ApprovalCard";

//import fakerJS
// import Faker from 'faker';

//import custom css
import "semantic-ui-css/semantic.min.css";

//create component

// import App from './App'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails author="Jenny" date="Yesterday" text="Hey Danny!" />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails author="Candice" date="Yesterday" text="Hey Danny!" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails author="Jack" date="Today" text="Good morning guys!" />
      </ApprovalCard>

      <div />
    </div>
  );
};

//create renderer

ReactDOM.render(<App />, document.getElementById("root"));
