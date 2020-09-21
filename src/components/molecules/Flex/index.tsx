import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'
import Semantics, { TagType } from '../../atoms/Semantics'

interface IProps {
  className?: string
  element?: TagType
  children?: React.ReactNode
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'left' | 'center' | 'right' | 'space-around' | 'space-between'
  wrap?: 'wrap' | 'no-wrap' | 'wrap-reverse'
  overflow?: 'auto' | 'hidden'
}

const Flex: React.FC<IProps> = ({
  className,
  element = 'div',
  children,
  direction = 'row',
  align,
  justify,
  wrap = 'no-wrap',
  overflow,
}) => {
  const classProps = classNames(
    className,
    styles['default'],
    styles[direction],
    styles[wrap],
    align ? styles['align-' + align] : '',
    justify ? styles['justify-' + justify] : '',
    overflow ? styles['overflow-' + overflow] : ''
  )
  return (
    <Semantics element={element} className={classProps}>
      {children}
    </Semantics>
  )
}

export default Flex
