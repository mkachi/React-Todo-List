import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

interface IProps {
  className?: string
  placeholder?: string
  value?: string
  onChange?(event: React.FormEvent<HTMLInputElement>): void
}

const TextBox: React.FC<IProps> = ({ className, placeholder = '', value = '', onChange = () => {} }) => {
  const classProps = classNames(className, styles['default'])
  return <input className={classProps} type={'textbox'} placeholder={placeholder} value={value} onChange={onChange} />
}

export default TextBox
