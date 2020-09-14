import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'
import { ITodo } from '../../../models/ITodo'
import TodoCard from '../../organisms/TodoCard'
import Flex from '../../molecules/Flex'

interface IProps {
  className?: string
  items: ITodo[]
}

const TodoList: React.FC<IProps> = ({ className, items }) => {
  const classProps = classNames(className, styles['default'])
  return (
    <Flex element={'section'} className={classProps} direction={'column'}>
      {items.map((todo, index) => {
        return <TodoCard key={index} data={todo} />
      })}
    </Flex>
  )
}

export default TodoList
