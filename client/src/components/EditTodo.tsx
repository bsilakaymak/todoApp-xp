import React, {useContext, useState} from 'react'
import {Button, TextareaAutosize, FormControl, Box} from '@material-ui/core'
import {TodosContext} from '../context/TodoContext'
import {useParams, useHistory} from 'react-router-dom'
import {textAreaPlaceholder} from '../styles/textarea-placeholder'

interface ParamTypes {
  id: string
}

const EditTodo: React.FC = () => {
  const {todos, setTodos} = useContext(TodosContext)
  const {id} = useParams<ParamTypes>()
  const todo = todos.find(todo => todo.id === id)!
  const history = useHistory()
  const [formData, setFormData] = useState(todo.description)

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(e.target.value)
    console.log(formData)
  }

  const editTodo = (formData: string) => {
    const toggleIndex = todos.map(todoItem => todoItem.id).indexOf(id)
    todos[toggleIndex].description = formData
    todos.splice(toggleIndex, 1, todos[toggleIndex])
    setTodos([...todos])
    history.push('/')
  }

  return (
    <div>
      <FormControl
        onSubmit={() => {
          editTodo(formData)
        }}
      >
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <TextareaAutosize
            style={textAreaPlaceholder}
            rowsMin={4}
            aria-label="minimum height"
            name="description"
            placeholder="Edit Description"
            value={formData}
            onChange={onChange}
          />
          <Button
            onClick={() => {
              editTodo(formData)
            }}
          >
            EDIT
          </Button>
        </Box>
      </FormControl>
    </div>
  )
}

export default EditTodo
