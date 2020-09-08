import React, { FC } from "react";
import { Header, Segment } from "semantic-ui-react";

const HeaderTodo: FC = () => {
  return (
    <Segment placeholder>
      <Header textAlign="center" size="huge">
        Todo App
      </Header>
    </Segment>
  );
};

export default HeaderTodo;
