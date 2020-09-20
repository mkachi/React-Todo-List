import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'
import styled from 'styled-components'
import { lighten } from '../../../utils/color'

import { AiOutlineCheck } from 'react-icons/ai'

interface IProps {
  className?: string
  color?: string
  checked?: boolean
  onChange?(event: React.FormEvent<HTMLInputElement>): void
}

const StyledSpan = styled.span`
  background-color: ${(props: { isChecked: any; color: any }) => {
    if (!props.isChecked) {
      return 'transparent'
    } else {
      return props.color
    }
  }};
  &:hover {
    background-color: ${(props: { color: string }) => lighten(props.color, 30)};
  }
`

const CheckBox: React.FC<IProps> = ({ className, checked = false, color = '#788cde', onChange = () => {} }) => {
  const classProps = classNames(className, styles['default'])
  return (
    <StyledSpan className={classProps} isChecked={checked} color={color}>
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
