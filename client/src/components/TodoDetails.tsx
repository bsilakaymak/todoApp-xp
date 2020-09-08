import React from 'react'
import {Layer, Box, Text, Button} from 'grommet'
import {Trash, Edit} from 'grommet-icons'
import {Link} from 'react-router-dom'
import { Todo } from 'dummy-data'

interface Props {
  detailsOpen: boolean
  onClose: () => void
  onDelete: (todo: string) => void
  todo: Todo
}

const TodoDetails: React.FC<Props> = ({
  todo,
  detailsOpen,
  onClose,
  onDelete,
}: Props) => {
  return (
    <>
      {detailsOpen && (
        <Layer position="center" onClickOutside={onClose} onEsc={onClose}>
          <Box pad="medium" gap="small" width="medium">
            <Text>{todo.description}</Text>
            <Box direction="row" justify="around" pad="large">
              <Button
                icon={<Trash color="red" />}
                plain
                type="submit"
                onClick={() => {
                  onDelete(todo.title)
                  onClose()
                }}
              ></Button>
              <Link to={`/edit/${todo.id}`}>
                <Button plain type="submit">
                  <Edit color="#555555" />
                </Button>
              </Link>
            </Box>
          </Box>
        </Layer>
      )}
    </>
  )
}

export default TodoDetails
