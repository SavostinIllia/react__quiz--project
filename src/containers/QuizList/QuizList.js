import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./QuizList.module.css";
export default class QuizList extends Component {
  renderQuizList() {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={"/quiz/" + quiz}>Quiz {quiz}</NavLink>
        </li>
      );
    });
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>List of Quizzes</h1>
          <ul>{this.renderQuizList()}</ul>
        </div>
      </div>
    );
  }
}
