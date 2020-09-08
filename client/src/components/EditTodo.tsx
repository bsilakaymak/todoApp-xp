import React, {useContext, useState} from 'react'
import {Form, FormField, TextArea, Box, Button} from 'grommet'
import {Link, useParams, useHistory} from 'react-router-dom'
import {TodosContext} from './TodosContext'
import {Todo} from 'dummy-data'

interface ParamTypes {
  id: string
}

const EditTodo: React.FC = () => {

  const {todos, setTodos} = useContext(TodosContext)

  const {id} = useParams<ParamTypes>()
  
  const history = useHistory()

  const todo: Todo = todos.find(todo => todo.id === id)!

  const [formData, setFormData] = useState(todo.description)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value)
  }


  const editTodo = (formData: string) => {
    const toggleIndex = todos.map(todoItem => todoItem.id).indexOf(id)
    todos[toggleIndex].description = formData
    todos.splice(toggleIndex, 1, todos[toggleIndex])
    setTodos([...todos])
    history.push('/')
    console.log(todos)
  }

  return (
    <Box align="center" justify="center" direction="column" pad="large">
      {' '}
      <Form>
        <FormField
          htmlFor="text-area"
          onChange={onChange}
          value={formData}
          component={TextArea}
          placeholder="Edit Description"
        />
        <Box align="center" justify="center">
          <Box pad="0.5rem">
            <Button type="submit" label="EDIT" primary onClick={() => editTodo(formData)} />
          </Box>
          <Box pad="0.5rem">
            <Link to="/">
              <Button label="CANCEL" />
            </Link>
          </Box>
        </Box>
      </Form>{' '}
    </Box>
  )
}

export default EditTodo
