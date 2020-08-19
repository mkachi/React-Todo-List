import styled from 'styled-components'
import { opacity, darken } from '../../../utils/color'

const contain = (color: string) => `
background-color: ${color};

&:hover {
  background-color: ${darken(color, 30)};
}
`

const text = (color: string) => `
color: ${color};
background-color: transparent;

&:hover {
  background-color: ${opacity(color, 0.2)};
}
`

const outline = (color: string) => `
color: ${color};
background-color: transparent;

border: 1px solid ${color};
border-radius: 5px;

&:hover {
  background-color: ${opacity(color, 0.2)};
}
`

const link = (color: string) => `
color: ${color};
background-color: transparent;

&:hover {
  text-decoration: underline;
}
`

const style = (variant: string, color: string) => {
  if (variant === 'contain') {
    return styled.button`
      ${contain(color)}
    `
  } else if (variant === 'outline') {
    return styled.button`
      ${outline(color)}
    `
  } else if (variant === 'link') {
    return styled.button`
      ${link(color)}
    `
  } else {
    return styled.button`
      ${text(color)}
    `
  }
}

export default style
