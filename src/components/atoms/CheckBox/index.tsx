import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './style.module.css'
import styled from './styled'

import { AiOutlineCheck } from 'react-icons/ai'

interface IProps {
  className?: string
  color?: string
  checked?: boolean
  onChange?(event: React.FormEvent<HTMLInputElement>): void
}

const CheckBox: React.FC<IProps> = ({ className, checked = false, color = '#788cde', onChange = () => {} }) => {
  const classProps = classNames(className, styles['default'])
  const StyledSpan = styled(checked, color)

  return (
    <StyledSpan className={classProps}>
      <input
        className={styles['check-input']}
        type={'checkbox'}
        checked={checked}
        onChange={(event: React.FormEvent<HTMLInputElement>) => {
          onChange(event)
        }}
      />
      {checked && <AiOutlineCheck className={styles['check-icon']} />}
    </StyledSpan>
  )
}

export default CheckBox
