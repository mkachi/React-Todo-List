import React, { useState } from 'react'
import { ITodo } from '../../models/ITodo'

interface ITodoList {
  items: ITodo[]
  add(todo: ITodo): number
  remove(id: number): void
  setToggle(id: number, value: boolean): void
}

const TodoContext = React.createContext<ITodoList | null>(null)

interface IProps {
  children?: React.ReactNode
}

export const TodoProvider: React.FC<IProps> = ({ children }) => {
  const [items, setItems] = useState<ITodo[]>([])

  return (
    <TodoContext.Provider
      value={{
        items,
        add: (todo: ITodo): number => {
          setItems([...items, todo])
          todo.id = items.length
          return items.length
        },
        remove: (id: number): void => {
          items.forEach((item, index) => {
            if (item.id == id) {
              setItems(items.slice(index, 1))
              return
            }
          })
        },
        setToggle: (id: number, value: boolean): void => {
          items.forEach(item => {
            if (item.id === id) {
              item.checked = value
              return
            }
          })
        }
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
