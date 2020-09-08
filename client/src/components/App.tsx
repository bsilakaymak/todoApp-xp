import * as React from 'react'
import {Grommet, grommet} from 'grommet'
import TodoApp from './TodoApp'
import {deepMerge} from 'grommet/utils'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import EditTodo from './EditTodo'
import { TodosProvider} from './TodosContext'

const customTheme = deepMerge(grommet, {
  global: {
    font: {
      family: 'Verdana',
    },
  },
  textInput: {
    extend: `::placeholder{
      color:#F2F2F2;
      padding:0;
      font-weight:500;
    };`,
  },
  textArea: {
    extend: `::placeholder{
      color:#7D4BDA;
      opacity:0.75;
      padding:0;
      font-weight:500;
    };`,
  },
})

const App: React.FC = () => {
  return (
    <Grommet theme={customTheme}>
      <TodosProvider>
        <Router>
          <Switch>
            <Route path="/" component={TodoApp} exact />
            <Route path="/edit/:id" component={EditTodo} exact />
          </Switch>
        </Router>
      </TodosProvider>
    </Grommet>
  )
}

export default App
