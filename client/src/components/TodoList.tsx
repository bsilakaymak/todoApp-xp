import React, {useContext} from 'react'
import {TodosContext} from '../context/TodoContext'
import Todo from './Todo'
import {Box, Typography} from '@material-ui/core'

const TodoList: React.FC = () => {
  const {todos, filterTodos} = useContext(TodosContext)
  return (
    <Box
      margin="1rem"
      flexDirection="column"
      alignItems="left"
      justifyContent="center"
      display="flex"
      width="100%"
    >
      {filterTodos(todos).length === 0 && (
        <Typography color="primary" variant="h5" component="h3">
          No Todo
        </Typography>
      )}
      {filterTodos(todos).map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </Box>
  )
}

export default TodoList
