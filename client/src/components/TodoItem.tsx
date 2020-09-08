import React, {useState, useContext} from 'react'
import {Box, CheckBox, Text} from 'grommet'
import styled from 'styled-components'
import TodoDetails from './TodoDetails'
import {Todo} from 'dummy-data'
import { TodosContext } from './TodosContext'

interface Props {
  todo: Todo
}

interface StyleProps {
  complete?: boolean
}

const StyledText = styled(Text)<StyleProps>`
  text-decoration: ${props => props.complete && 'line-through'};
`

const TodoItem: React.FC<Props> = ({todo}: Props) => {
  const [checked, setChecked] = useState(todo.completed)
  const [detailsOpen, setDetailsOpen] = useState(false)
  const {deleteTodo, toggleTodo} = useContext(TodosContext)

  const onClose = () => {
    setDetailsOpen(false)
  }
  const onButtonClick = () => {
    setDetailsOpen(true)
  }
  return (
    <>
      <Box align="start" pad="large">
        <Box align="center" pad={{left: '0', right: '0'}}>
          <CheckBox
            checked={checked}
            label={
              <Text onClick={onButtonClick}>
                <StyledText complete={checked}>{todo.title}</StyledText>
              </Text>
            }
            onChange={() => {
              toggleTodo(todo.title)
              setChecked(todo.completed)
            }}
          />
        </Box>
        <TodoDetails
          todo={todo}
          onClose={onClose}
          onDelete={deleteTodo}
          detailsOpen={detailsOpen}
        />
      </Box>
    </>
  )
}

export default TodoItem
