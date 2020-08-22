import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

interface IProps {
  className?: string
  children?: React.ReactNode
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strike?: boolean
}

const Text: React.FC<IProps> = ({
  className,
  children,
  bold = false,
  italic = false,
  underline = false,
  strike = false,
}) => {
  const classProps = classNames(
    bold ? styles['bold'] : '',
    italic ? styles['italic'] : '',
    underline ? styles['underline'] : '',
    strike ? styles['strike'] : ''
  )

  return <span className={classProps}>{children}</span>
}

export default Text
