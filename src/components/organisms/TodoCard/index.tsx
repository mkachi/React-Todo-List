import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'
import { ITodo } from '../../../models/ITodo'
import Card from '../../molecules/Card'
import CheckBox from '../../atoms/CheckBox'
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'

import { BsFillTrashFill } from 'react-icons/bs'

interface IProps {
  className?: string
  data: ITodo
  onToggle?(event: React.FormEvent<HTMLButtonElement>): void
  onRemove?(event: React.FormEvent<HTMLButtonElement>): void
}

const TodoCard: React.FC<IProps> = ({ className, data, onToggle, onRemove }) => {
  const classProps = classNames(className, styles['default'])
  const descriptProps = classNames(styles['description'], data.checked ? styles['checked'] : '')
  return (
    <Card className={classProps}>
      <CheckBox checked={data.checked} color={'#78ded0'} onChange={onToggle} />
      <Text className={descriptProps} strike={data.checked}>
        {data.description}
      </Text>
      <Button className={styles['remove-button']} variant={'text'} color={'#ff4e4e'} onClick={onRemove}>
        <BsFillTrashFill />
      </Button>
    </Card>
  )
}

export default TodoCard
