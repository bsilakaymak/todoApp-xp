import React, {useContext} from 'react'
import {Dialog, Box} from '@material-ui/core'
import {Todo} from '../models/types'
import {TodosContext} from '../context/TodoContext'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit'
import {Link} from 'react-router-dom'

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  todo: Todo
}

const TodoDetails: React.FC<Props> = ({isOpen, setIsOpen, todo}: Props) => {
  const {deleteTodo} = useContext(TodosContext)
  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false)
      }}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box padding="1rem">
        <p>{todo.description}</p>
        <Box padding="0.5rem" display="flex" flexDirection="row" justifyContent="space-around">
          <DeleteForeverIcon
            color="error"
            fontSize="large"
            onClick={() => deleteTodo(todo.title)}
          />
          <Link to={`/edit/${todo.id}`} style={{color: 'black'}}>
            <EditIcon fontSize="large" />
          </Link>
        </Box>
      </Box>
    </Dialog>
  )
}

export default TodoDetails
