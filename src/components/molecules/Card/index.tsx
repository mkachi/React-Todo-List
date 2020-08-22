import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'
import styled from './styled'

import { TagType } from '../../atoms/Semantics'

interface IProps {
  className?: string
  element?: TagType
  color?: string
  children?: React.ReactNode
}

const Card: React.FC<IProps> = ({ className, element = 'div', color = '#ffffff', children }) => {
  const classProps = classNames(className, styles['default'])
  const StyledTag = styled(element, color)
  return <StyledTag className={classProps}>{children}</StyledTag>
}

export default Card
