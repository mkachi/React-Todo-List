import styled from 'styled-components'
import { opacity, darken } from '../../../utils/color'

const contain = styled.button`
  background-color: ${(props: { color: any }) => props.color};
  &:hover {
    background-color: ${(props: { color: string }) => darken(props.color, 30)};
  }
`

const text = styled.button`
  color: ${(props: { color: any }) => props.color};
  background-color: transparent;
  &:hover {
    background-color: ${(props: { color: string }) => opacity(props.color, 0.2)};
  }
`

const outline = styled.button`
  color: ${(props: { color: any }) => props.color};
  background-color: transparent;
  border: 1px solid ${(props: { color: any }) => props.color};
  border-radius: 5px;
  &:hover {
    background-color: ${(props: { color: string }) => opacity(props.color, 0.2)};
  }
`

const link = styled.button`
  color: ${(props: { color: any }) => props.color};
  background-color: transparent;
  &:hover {
  }
  text-decoration: underline;
`

const style = (variant: string) => {
  switch (variant) {
    case 'contain':
      return contain
    case 'outline':
      return outline
    case 'link':
      return link
    default:
      return text
  }
}

export default style
