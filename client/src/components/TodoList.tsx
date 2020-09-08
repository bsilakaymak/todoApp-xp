import React, {useState, useContext} from 'react'
import TodoItem from './TodoItem'
import {Todo} from '../dummy-data'
import {Select} from 'grommet'
import { TodosContext } from './TodosContext'



const TodoList: React.FC = () => {
  const options: string[] = ['All', 'Open', 'Completed']
  const [value, setValue] = useState('All')
  const { todos } = useContext(TodosContext)
  
  return (
    <>
      <Select
        id="select"
        name="select"
        placeholder="Select"
        value={value}
        options={options}
        onChange={({option}) => setValue(option)}
      />
      {value === 'All'
        ? todos.map((todo: Todo) => (
            <TodoItem
              key={todo.title}
              todo={todo}
            />
          ))
        : todos
            .filter((todo: Todo) => {
              if (value === 'Completed') {
                return todo.completed === true
              } else {
                return todo.completed === false
              }
            })
            .map((todo: Todo) => (
              <TodoItem
                key={todo.title}
                todo={todo}
              />
            ))}
    </>
  )
}

export default TodoList
