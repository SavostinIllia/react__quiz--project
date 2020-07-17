import React, { Component } from "react";
import classes from "./QuizCreator.module.css";
import Button from "../../components/UI/Button/Button";
import { createControl } from "../../form/formCreator";
import Input from "../../components/UI/Input/Input";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Select from "../../components/UI/Select/Select";
function createOptionControl(number) {
  return createControl(
    {
      label: `Option ${number}`,
      errorMessage: "Option can not be empty",
      id: number,
    },
    { required: true }
  );
}

function createFormControls() {
  return {
    question: createControl(
      {
        label: "Enter the question",
        errorMessage: "Question can not be empty",
      },
      { required: true }
    ),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  };
}

export default class QuizCreator extends Component {
  state = {
    quiz: [],
    rightAnswerID: 1,
    formControls: createFormControls(),
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
  };

  addQuestionHandler = () => {};

  createQuizHandler = () => {};

  changeHandler = (e, controlName) => {};

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <Auxiliary key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={(e) => this.changeHandler(e.target.value, controlName)}
          />

          {index === 0 ? <hr /> : null}
        </Auxiliary>
      );
    });
  }
  selectChangeHandler = (e) => {
    this.setState({
      rightAnswerID: +e.target.value,
    });
  };

  render() {
    const select = (
      <Select
        label="Choose right answer"
        value={this.state.rightAnswerID}
        onChange={this.selectChangeHandler}
        options={[
          { text: 1, value: 1 },
          { text: 2, value: 2 },
          { text: 3, value: 3 },
          { text: 4, value: 4 },
        ]}
      />
    );

    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Create you oun Quiz </h1>
          <form onSubmit={this.onSubmitHandler}>
            {this.renderControls()}
            {select}
            <Button type="primary" onCllick={this.addQuestionHandler}>
              Add Question{" "}
            </Button>
            <Button type="success" onCllick={this.createQuizHandler}>
              Create Quiz{" "}
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
