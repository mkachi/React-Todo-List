import styled from 'styled-components'
import { lighten } from '../../../utils/color'

const style = (isChecked: boolean, color: string) => {
  if (!isChecked) {
    return styled.span`
      background-color: transparent;

      &:hover {
        background-color: ${lighten(color, 30)};
      }
    `
  }

  return styled.span`
    background-color: ${color};

    &:hover {
      background-color: ${lighten(color, 30)};
    }
  `
}

export default style
