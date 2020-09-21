import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'
import Semantics, { TagType } from '../../atoms/Semantics'

interface IProps {
  className?: string
  element?: TagType
  children?: React.ReactNode
}

const Container: React.FC<IProps> = ({ className, element, children }) => {
  const classProps = classNames(className, styles['default'])
  return (
    <Semantics className={classProps} element={element}>
      {children}
    </Semantics>
  )
}

export default Container
