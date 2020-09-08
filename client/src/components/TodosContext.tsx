import React, {useState} from 'react'
import {createContext} from 'react'
import {todoList, Todo} from '../dummy-data'

interface Props {
  children: React.ReactNode
}
interface IContext {
  addTodo: (todo: Todo) => void
  toggleTodo: (todo: string) => void,
  setTodos : React.Dispatch<React.SetStateAction<Todo[]>>,
  deleteTodo: (todo: string) => void
  todos: Todo[]
}

const initialContext: IContext = {
  addTodo: () => undefined,
  toggleTodo: () => undefined,
  deleteTodo: () => undefined,
  setTodos: ()=>todoList,
  todos: [],
}

export const TodosContext = createContext<IContext>(initialContext)

export const TodosProvider: React.FC<Props> = ({children}: Props) => {
  const [todos, setTodos] = useState([...todoList])
  const deleteTodo = (todo: string) => {
    const newTodos = todos.filter(todoItem => todoItem.title !== todo)
    console.log(todoList)
    setTodos(newTodos)
  }
  const addTodo = (todo: Todo) => {
    const newTodos = [...todos, todo]
    setTodos(newTodos)
  }
  const toggleTodo = (todo: string) => {
    const toggleIndex = todos.map(todoItem => todoItem.title).indexOf(todo)
    todos[toggleIndex].completed = !todos[toggleIndex].completed
    todos.splice(toggleIndex, 1, todos[toggleIndex])
  }

  return (
    <TodosContext.Provider
      value={{
        todos: todos,
        setTodos:setTodos,
        deleteTodo: deleteTodo,
        addTodo: addTodo,
        toggleTodo: toggleTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  )
}
