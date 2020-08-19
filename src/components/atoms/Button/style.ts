import styled from 'styled-components'
import { opacity, darken } from '../../../utils/color'

const defaultStyle = () => `
border: 0;
padding: 0 1em;
min-height: 2.5em;
border-radius: 5px;
cursor: pointer;
background-color: transparent;
`

const contain = (color: string) => `
${defaultStyle()}
background-color: ${color};
transition: all 0.3s ease;

&:hover {
  background-color: ${darken(color, 30)};
}
`

const text = (color: string) => `
${defaultStyle()}
color: ${color};
background-color: ${opacity(color, 0.0)};
transition: all 0.3s ease;

&:hover {
  background-color: ${opacity(color, 0.2)};
}
`

const outline = (color: string) => `
${defaultStyle()}
color: ${color};
background-color: ${opacity(color, 0.0)};
transition: all 0.3s ease;
border: 1px solid ${color};
border-radius: 5px;

&:hover {
  background-color: ${opacity(color, 0.2)};
}
`

const link = (color: string) => `
${defaultStyle()}
color: ${color};
background-color: ${opacity(color, 0.0)};
transition: all 0.3s ease;

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
