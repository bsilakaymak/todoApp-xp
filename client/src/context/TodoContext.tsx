import React, {useState} from 'react'
import {createContext} from 'react'
import {todoList} from '../dummy-data'
import {Todo, SortType} from '../models/types'

interface Props {
  children: React.ReactNode
}
interface Context {
  addTodo: (todo: Todo) => void
  toggleTodo: (id: string) => void
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  setSort: React.Dispatch<React.SetStateAction<SortType>>
  deleteTodo: (todo: string) => void
  filterTodos: (todos: Todo[]) => Todo[]
  todos: Todo[]
}

const initialContext: Context = {
  addTodo: () => undefined,
  toggleTodo: () => undefined,
  deleteTodo: () => undefined,
  setTodos: () => todoList,
  setSort: () => todoList,
  filterTodos: () => todoList,
  todos: [],
}

export const TodosContext = createContext<Context>(initialContext)

export const TodosProvider: React.FC<Props> = ({children}: Props) => {
  const [todos, setTodos] = useState([...todoList])

  const deleteTodo = (todo: string) => {
    const newTodos = todos.filter(todoItem => todoItem.title !== todo)
    setTodos(newTodos)
  }

  const addTodo = (todo: Todo) => {
    const newTodos = [...todos, todo]
    setTodos(newTodos)
  }

  const toggleTodo = (id: string) => {
    const toggleIndex = todos.map(todoItem => todoItem.id).indexOf(id)
    todos[toggleIndex].completed = !todos[toggleIndex].completed
    todos.splice(toggleIndex, 1, todos[toggleIndex])
    setTodos([...todos])
  }

  const [sort, setSort] = useState<SortType>(SortType.All)

  const filterTodos = (todos: Todo[]): Todo[] => {
    switch (sort) {
      case SortType.All:
        return todos
      case SortType.Open:
        return todos.filter(todo => !todo.completed)
      case SortType.Completed:
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }

  return (
    <TodosContext.Provider
      value={{
        todos: todos,
        setTodos: setTodos,
        deleteTodo: deleteTodo,
        addTodo: addTodo,
        toggleTodo: toggleTodo,
        filterTodos: filterTodos,
        setSort: setSort,
      }}
    >
      {children}
    </TodosContext.Provider>
  )
}
