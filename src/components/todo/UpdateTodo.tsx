import React, {
  FC,
  useState,
  FormEvent,
  useContext,
  useEffect,
  ChangeEvent,
} from "react";
import { Form, Button } from "semantic-ui-react";
import { TodoContext } from "../../TodoState";
import { useParams, useHistory, Link } from "react-router-dom";
import { Todo } from "./Todo";
import { TodoContainer } from "./Todo";
const UpdateTodo: FC = () => {
  const { id } = useParams();
  const history = useHistory();
  const { setTodos, todos } = useContext(TodoContext);

  const [todo, setTodo] = useState<Todo>({
    id: "",
    title: "",
    completed: false,
  });
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos(todos.map((t) => (t.id === id ? todo : t)));
    history.push("/");
    console.log(todos);
  };

  useEffect(() => {
    // eslint-disable-next-line
    todos.filter((todo: Todo) => {
      if (todo.id === id) {
        setTodo(todo);
      }
    });
  }, [id, todos, setTodos]);
  return (
    <TodoContainer>
      <Link to="/">
        <Button color="vk">Back to todo list</Button>
      </Link>

      <Form onSubmit={onSubmitHandler}>
        <Form.Field>
          <input
            placeholder="Add todo"
            value={todo?.title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTodo(
                todo && {
                  title: e.target.value,
                  completed: todo?.completed,
                  id: todo?.id,
                }
              )
            }
          />
        </Form.Field>

        <Button fluid color="blue" type="Update">
          Update
        </Button>
      </Form>
    </TodoContainer>
  );
};

export default UpdateTodo;
