import React from 'react'

export type TagType =
  | 'div'
  | 'article'
  | 'aside'
  | 'details'
  | 'figcaption'
  | 'figure'
  | 'footer'
  | 'header'
  | 'main'
  | 'mark'
  | 'nav'
  | 'section'
  | 'summary'
  | 'time'

interface IProps {
  className?: string
  element?: TagType
  children?: React.ReactNode
}

const Semantics: React.FC<IProps> = ({ className, element = 'div', children, ...props }) => {
  return React.createElement(element, { className: className, ...props }, children)
}

export default Semantics
