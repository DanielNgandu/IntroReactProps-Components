//import react and reactDOM
import React from "react";
import ReactDOM from "react-dom";

//import our custom components
import CommentDetails from "./CommentDetails";

//import fakerJS
// import Faker from 'faker';

//import custom css
import "semantic-ui-css/semantic.min.css";

//create component

// import App from './App'

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetails author ="Daniel" date="Yesterday" text="Hey Candice"/>
      <CommentDetails author="Candice" date="Yesterday" text="Hey Danny!"/>
      <CommentDetails author = "Jack" date="Today" text="Good morning guys!"/>
    </div>
  );
};

//create renderer

ReactDOM.render(<App />, document.getElementById("root"));
