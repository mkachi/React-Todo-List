import styled from 'styled-components'

const style = (element: string, color: string) => {
  return styled[element]`
    background-color: ${color};
  `
}

export default style
