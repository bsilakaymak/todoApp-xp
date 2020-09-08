import React, {useState} from 'react'
import {Grid, Box, TextInput, FormField, Button, Text, Layer, TextArea, Form} from 'grommet'
import styled from 'styled-components'
import TodoList from './TodoList'
import {Tasks, AddCircle} from 'grommet-icons'

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  margin: auto;
`

const TodoApp: React.FC = () => {
  const [descOpen, setDescOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    completed: false,
  })
  

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <StyledDiv>
      <Grid
        fill
        responsive
        alignSelf="center"
        rows={['xxsmall', 'auto', 'small', 'xsmall']}
        columns={['3/4', '1/4']}
        areas={[
          ['header', 'header'],
          ['todo', 'todo'],
          ['todoform', 'todoform'],
          ['footer', 'footer'],
        ]}
        gap="small"
      >
        <Box background="brand" gridArea="header" align="center" justify="around" direction="row">
          <Tasks size="2rem" /> <Text>TodoApp</Text>
        </Box>

        <Box
          background="brand"
          gridArea="todoform"
          direction="row"
          align="center"
          justify="around"
          pad="0 0 0 1rem"
        >
          <FormField name="todo" required>
            <TextInput
              name="title"
              value={formData.title}
              onChange={onChangeHandler}
              type="text"
              placeholder={'Add Todo'}
            />
          </FormField>
          <Button
            label={<AddCircle size="2.5rem" />}
            href="#"
            size="medium"
            plain
            onClick={() => setDescOpen(true)}
          />
        </Box>
        {formData.title !== '' && descOpen && (
          <Layer
            position="center"
            onClickOutside={() => setDescOpen(false)}
            onEsc={() => setDescOpen(false)}
          >
            <Box>
              <Form
                onSubmit={() => {
                  setDescOpen(false)
                  setFormData({
                    title: '',
                    description: '',
                    completed: false,
                  })
                }}
              >
                <FormField
                  htmlFor="text-area"
                  name="description"
                  value={formData.description}
                  onChange={onChangeHandler}
                  component={TextArea}
                  placeholder="Description"
                />
                <Box align="center" justify="center">
                  <Box pad="0.5rem">
                    <Button type="submit" label="Add Description" primary />
                  </Box>
                </Box>
              </Form>{' '}
            </Box>
          </Layer>
        )}

        <Box background="light-2" gridArea="todo" pad="1rem">
          <TodoList />
        </Box>
        <Box background="dark-2" gridArea="footer" align="center" justify="center">
          <Text>XPAY Amsterdam Dev Team</Text>
        </Box>
      </Grid>
    </StyledDiv>
  )
}

export default TodoApp
