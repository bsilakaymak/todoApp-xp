import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import { Button, Form } from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";

interface Props {
  addTodo: (todo: Todo) => void;
}

const AddTodo: FC<Props> = ({ addTodo }) => {
  const [todo, setTodo] = useState<string>("");

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({ id: uuidv4(), title: todo, completed: false });
    setTodo("");
  };
  return (
    <Form onSubmit={onSubmitHandler}>
      <Form.Field>
        <input
          placeholder="Add todo"
          value={todo}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTodo(e.target.value)
          }
        />
      </Form.Field>

      <Button fluid color="blue" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddTodo;
