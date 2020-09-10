import * as React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TodoApp from './TodoApp'
import EditTodo from './EditTodo'
import {TodosProvider} from '../context/TodoContext'
import {Box, Container} from '@material-ui/core'
import {darkBlue, white} from '../styles/colors'
import {Arial} from '../styles/fonts'
import AssignmentIcon from '@material-ui/icons/Assignment'

const App: React.FC = () => {
  return (
    <TodosProvider>
      <Router>
        <Switch>
          <Container>
            <Box
              padding="2rem"
              margin="0.5rem auto"
              bgcolor={darkBlue}
              width="80%"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              display="flex"
            >
              <AssignmentIcon style={{color: white, fontSize: '3rem'}} />
              <h1 style={{color: white, fontFamily: Arial}}>TodoApp</h1>
            </Box>
            <Box
              padding="2rem"
              margin="2rem auto"
              css={{border: `1px solid ${darkBlue}`}}
              width="80%"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              display="flex"
            >
              <Route path="/" component={TodoApp} exact />
              <Route path="/edit/:id" component={EditTodo} exact />
            </Box>
          </Container>
        </Switch>
      </Router>
    </TodosProvider>
  )
}

export default App
