import React, { createContext, FC, useState } from "react";
import { Todo } from "./components/todo/Todo";

export interface ITodoContext {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const initialContext = {
  todos: [],
  setTodos: () => {},
};

export const TodoContext = createContext<ITodoContext>(initialContext);

const TodoState: FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Todo one", completed: false },
    { id: "2", title: "Todo two", completed: true },
    { id: "3", title: "Todo three", completed: false },
    { id: "4", title: "Todo four", completed: false },
  ]);

  return (
    <TodoContext.Provider
      value={{
        todos: todos,
        setTodos: setTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoState;
