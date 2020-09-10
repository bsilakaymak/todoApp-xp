export enum SortType {
  All = 'All',
  Completed = 'Completed',
  Open = 'Open',
}
export interface Todo {
  id: string
  title: string
  description: string
  completed: boolean
}
