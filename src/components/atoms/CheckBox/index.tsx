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
  const [isChecked, setCheck] = useState(checked)
  const classProps = classNames(className, styles['default'])
  const StyledSpan = styled(isChecked, color)

  return (
    <StyledSpan className={classProps}>
      <input
        className={styles['check-input']}
        type={'checkbox'}
        checked={isChecked}
        onChange={(event: React.FormEvent<HTMLInputElement>) => {
          setCheck(event.target.checked)
          onChange(event)
        }}
      />
      {isChecked && <AiOutlineCheck className={styles['check-icon']} />}
    </StyledSpan>
  )
}

export default CheckBox
