import React from "react";
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import { Route, Switch } from "react-router-dom";
import Auth from "./containers/Auth/Auth";
import QuizList from "./containers/QuizList/QuizList";
import QuizCreator from "./containers/QuizCreator/QuizCreator";

function App() {
  console.log("Dev Works");
  return (
    <Layout>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/quiz-creator" component={QuizCreator} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/" component={QuizList} />
      </Switch>
    </Layout>
  );
}

export default App;
