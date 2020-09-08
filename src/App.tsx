import React, { FC } from "react";
import Todo from "./components/todo/Todo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UpdateTodo from "./components/todo/UpdateTodo";
import TodoState from "./TodoState";
const App: FC = () => {
  return (
    <TodoState>
      <Router>
        <Switch>
          <Route exact path="/" component={Todo} />
          <Route exact path="/update/:id" component={UpdateTodo} />
        </Switch>
      </Router>
    </TodoState>
  );
};

export default App;
