import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'
import Card from '../../molecules/Card'
import TextBox from '../../atoms/TextBox'
import Button from '../../atoms/Button'

import { GrAdd } from 'react-icons/gr'

interface IProps {
  className?: string
  placeholder?: string
  text?: string
  onClick?(event: React.FormEvent<HTMLButtonElement>): void
  onChange?(event: React.FormEvent<HTMLInputElement>): void
}

const TodoInput: React.FC<IProps> = ({ className, placeholder = '', text = '', onClick = () => {}, onChange = () => {} }) => {
  const classProps = classNames(className, styles['default'])
  return (
    <Card className={classProps} color={'#36bdb44f'}>
      <TextBox className={styles['input']} placeholder={placeholder} value={text} onChange={onChange} />
      <Button className={styles['add-button']} variant={'text'} color={'#ffffff'} onClick={onClick}>
        <GrAdd />
      </Button>
    </Card>
  )
}

export default TodoInput
