import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'
import styled from './styled'

interface IProps {
  className?: string
  children?: React.ReactNode
  variant?: 'contain' | 'text' | 'outline' | 'link'
  color?: string
  onClick?(event: React.FormEvent<HTMLButtonElement>): void
}

const Button: React.FC<IProps> = ({ className, children, variant = 'text', color = '#788cde', onClick = () => {} }) => {
  const classProps = classNames(className, styles['default'])
  const StyledButton = styled(variant, color)

  return (
    <StyledButton className={classProps} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
