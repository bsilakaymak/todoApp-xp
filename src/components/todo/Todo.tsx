import React, { FC, useContext, useState } from "react";
import { Container, Card, Button } from "semantic-ui-react";
import styled from "styled-components";
import HeaderTodo from "./HeaderTodo";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { TodoContext } from "../../TodoState";
export const TodoContainer = styled.div`
  padding: 0.5rem 1.5rem;
`;

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

enum SortType {
  All = "All",
  Active = "Active",
  Completed = "Completed",
}

const Todo: FC = () => {
  const { setTodos, todos } = useContext(TodoContext);
  const [sort, setSort] = useState<SortType>(SortType.All);
  const toggleCompleted = (todo: Todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (todo: Todo) => {
    setTodos([todo, ...todos]);
  };

  const filterTodos = (todos: Todo[]): Todo[] => {
    switch (sort) {
      case SortType.All:
        return todos;
      case SortType.Active:
        return todos.filter((todo) => !todo.completed);
      case SortType.Completed:
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <Container>
      <Card fluid raised={true}>
        <HeaderTodo />
        <TodoContainer>
          <AddTodo addTodo={addTodo} />
          {todos.length > 0 &&
            filterTodos(todos).map((todo) => (
              <TodoList
                key={todo.id}
                todo={todo}
                toggleCompleted={toggleCompleted}
                deleteTodo={deleteTodo}
              />
            ))}
          <Button
            color="linkedin"
            size="mini"
            onClick={() => setSort(SortType.All)}
          >
            All
          </Button>
          <Button
            color="green"
            size="mini"
            onClick={() => setSort(SortType.Completed)}
          >
            Completed
          </Button>
          <Button
            color="vk"
            size="mini"
            onClick={() => setSort(SortType.Active)}
          >
            Active
          </Button>
        </TodoContainer>
      </Card>
    </Container>
  );
};

export default Todo;
