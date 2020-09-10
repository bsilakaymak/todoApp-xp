import React, {useState, useContext} from 'react'
import {Checkbox, Button} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import TodoDetails from './TodoDetails'
import {Todo} from 'models/types'
import {TodosContext} from '../context/TodoContext'

interface Props {
  todo: Todo
}
const Todo: React.FC<Props> = ({todo}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [completed, setCompleted] = useState(todo.completed)
  const {toggleTodo} = useContext(TodosContext)
  return (
    <>
      <Box component="span">
        <Checkbox
          color="primary"
          onChange={() => {
            toggleTodo(todo.id)
            setCompleted(!completed)
          }}
          checked={completed}
        />{' '}
        <Button onClick={() => setIsOpen(true)}>
          <p style={{textDecoration: completed ? 'line-through' : 'none'}}>{todo.title}</p>
        </Button>
        <Box>{isOpen && <TodoDetails todo={todo} isOpen={isOpen} setIsOpen={setIsOpen} />}</Box>
      </Box>
    </>
  )
}

export default Todo
