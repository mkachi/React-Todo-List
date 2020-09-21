import React, { useState } from 'react'
import { ITodo } from '../../models/ITodo'

interface ITodoList {
  items: ITodo[]
  add(description: string): void
  remove(id: number): void
  setToggle(id: number, value: boolean): void
}

export const TodoContext = React.createContext<ITodoList | null>(null)

interface IProps {
  children?: React.ReactNode
}

export const TodoConsumer = TodoContext.Consumer

export const TodoProvider: React.FC<IProps> = ({ children }) => {
  const [items, setItems] = useState<ITodo[]>([])

  return (
    <TodoContext.Provider
      value={{
        items,
        add: (description: string): void => {
          const todo: ITodo = {
            id: items.length + 1,
            checked: false,
            description
          }
          setItems([...items, todo])
        },
        remove: (id: number): void => {
          setItems(items.filter(value => value.id !== id))
        },
        setToggle: (id: number, value: boolean): void => {
          items.forEach(item => {
            if (item.id === id) {
              item.checked = value
              setItems([...items])
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
