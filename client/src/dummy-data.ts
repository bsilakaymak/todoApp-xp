import { v4 as uuidv4 } from 'uuid';
import {Todo} from 'types'

export const todoList: Todo[] = [
  {
    id:uuidv4(),
    title: 'Study',
    description: 'Finish TS tutorials',
    completed: false,
  },
  {
    id:uuidv4(),
    title: 'Exercise',
    description: 'Go to the park and run for 20 minutes',
    completed: true,
  },
  {
    id:uuidv4(),
    title: 'Clean the house',
    description: 'Wipe the floors, wash the dishes, do laundry',
    completed: false,
  },
  {
    id:uuidv4(),
    title: 'Meet your friend',
    description: "Be  in Amsterdam Oost at 19 o'clock",
    completed: false,
  },
]