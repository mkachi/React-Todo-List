import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'
import styled from 'styled-components'

interface IProps {
  className?: string
  color?: string
  children?: React.ReactNode
}

const StyledTag = styled.article`
  background-color: ${props => props.color};
`

const Card: React.FC<IProps> = ({ className, color = '#ffffff', children }) => {
  const classProps = classNames(className, styles['default'])
  return (
    <StyledTag className={classProps} color={color}>
      {children}
    </StyledTag>
  )
}

export default Card
