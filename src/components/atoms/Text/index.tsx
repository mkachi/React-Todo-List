import React from 'react'
import classNames from 'classnames'

interface IProps {
  className?: string
  children?: React.ReactNode
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strike?: boolean
}

const Text: React.FC<IProps> = ({ className, children, bold = false, italic = false, underline = false, strike = false }) => {
  return <span>{children}</span>
}
