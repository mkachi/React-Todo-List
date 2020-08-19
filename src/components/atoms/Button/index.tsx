import React from 'react'
import classNames from 'classnames'
import styles from './style'

interface IProps {
  className?: string
  children?: React.ReactNode
  variant?: 'contain' | 'text' | 'outline' | 'link'
  color?: string
  onClick?(event: React.FormEvent<HTMLButtonElement>): void
}

const Button: React.FC<IProps> = ({ className, children, variant = 'text', color = '#788cde', onClick = () => {} }) => {
  const classProps = classNames(className)
  const StyleButton = styles(variant, color)

  return (
    <StyleButton className={classProps} onClick={onClick}>
      {children}
    </StyleButton>
  )
}

export default Button
