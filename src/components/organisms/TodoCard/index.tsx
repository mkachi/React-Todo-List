import React, { useState } from 'react'
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
  onClick?(event: React.FormEvent<HTMLButtonElement>): void
}

const TodoCard: React.FC<IProps> = ({ className, data, onClick }) => {
  const [isChecked, setCheck] = useState(false)
  const classProps = classNames(className, styles['default'])
  const descriptProps = classNames(styles['description'], isChecked ? styles['checked'] : '')
  return (
    <Card className={classProps}>
      <CheckBox
        checked={isChecked}
        color={'#78ded0'}
        onChange={(event: React.FormEvent<HTMLInputElement>) => {
          setCheck(event.target.checked)
        }}
      />
      <Text className={descriptProps} strike={isChecked}>
        {data.description}
      </Text>
      <Button className={styles['remove-button']} variant={'text'} color={'#ff4e4e'} onClick={onClick}>
        <BsFillTrashFill />
      </Button>
    </Card>
  )
}

export default TodoCard
