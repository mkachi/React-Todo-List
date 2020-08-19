import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

interface IProps {
  className?: string
  children?: React.ReactNode
  align?: 'center' | 'right' | 'left'
}

const P: React.FC<IProps> = ({ className, children, align = 'right' }) => {
  const classProps = classNames(className, styles['default'], styles[align])
  return <p className={classProps}>{children}</p>
}

export default P
