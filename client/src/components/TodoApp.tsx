import React, {useContext, useState} from 'react'
import {TodosContext} from '../context/TodoContext'
import {Box, TextField, Button, Dialog, TextareaAutosize} from '@material-ui/core'
import {v4 as uuidv4} from 'uuid'
import TodoList from './TodoList'
import {SortType} from '../models/types'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import {darkBlue} from '../styles/colors'
import {textAreaPlaceholder} from '../styles/textarea-placeholder'

const TodoApp: React.FC = () => {
  const {addTodo, setSort} = useContext(TodosContext)
  const [secondFormOpen, setSecondFormOpen] = useState(false)
  const [formData, setFormData] = useState({
    id: uuidv4(),
    title: '',
    description: '',
    completed: false,
  })

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <>
      <Box width="100%" flexDirection="row" alignItems="end" justifyContent="center" display="flex">
        <TextField
          fullWidth
          id="standard-basic"
          label="Todo"
          placeholder="Add Todo"
          value={formData.title}
          name="title"
          onChange={onChangeHandler}
        />
        <Button onClick={() => setSecondFormOpen(true)}>
          <AddCircleIcon style={{color: darkBlue, fontSize: '3rem'}} />
        </Button>
      </Box>
      <TodoList />
      {secondFormOpen && (
        <Dialog
          open={secondFormOpen}
          onClose={() => {
            setSecondFormOpen(false)
          }}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Box
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            display="flex"
            padding="2rem"
          >
            <form
              onSubmit={() => {
                addTodo(formData)
                setSecondFormOpen(false)
                setFormData({
                  id: uuidv4(),
                  title: '',
                  description: '',
                  completed: false,
                })
              }}
              style={{display: 'flex', flexDirection: 'column'}}
            >
              <TextareaAutosize
                style={textAreaPlaceholder}
                rowsMin={3}
                id="standard-basic"
                placeholder="Add Description"
                name="description"
                value={formData.description}
                onChange={onChangeHandler}
              />
              <Button type="submit" color="primary">
                ADD
              </Button>
            </form>
          </Box>
        </Dialog>
      )}
      <Box padding="1rem" margin="1rem" display="flex" justifyContent="space-around" width="50%">
        <Button
          variant="contained"
          onClick={() => {
            setSort(SortType.All)
          }}
        >
          ALL
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            setSort(SortType.Open)
          }}
        >
          OPEN
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setSort(SortType.Completed)
          }}
        >
          COMPLETED
        </Button>
      </Box>
    </>
  )
}

export default TodoApp
