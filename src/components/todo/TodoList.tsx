import React, { FC } from "react";
import { Segment, Icon } from "semantic-ui-react";
import { Todo } from "./Todo";
import styled from "styled-components";
import { Link } from "react-router-dom";
const IconContainer = styled.div`
  float: right;
`;
interface Props {
  todo: Todo;
  toggleCompleted: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
}

const TodoList: FC<Props> = ({ todo, toggleCompleted, deleteTodo }) => {
  const { id, title, completed } = todo;
  return (
    <Segment.Group piled>
      <Segment>
        {title}
        <IconContainer>
          <Icon
            onClick={() =>
              toggleCompleted({ id, title, completed: !completed })
            }
            color={completed ? "green" : "red"}
            name={completed ? "check" : "close"}
            bordered
          />
          <Icon
            name="trash alternate"
            size="large"
            onClick={() => deleteTodo(id)}
          />
          <Link to={`/update/${id}`}>
            <Icon name="edit" size="large" />
          </Link>
        </IconContainer>
      </Segment>
    </Segment.Group>
  );
};

export default TodoList;
