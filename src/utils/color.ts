const clamp = (value: number, min: number, max: number) => {
  if (value < min) {
    return min
  } else if (value > max) {
    return max
  }
  return value
}

export const lighten = (hexColor: string, amount: number): string => {
  let usePound = false
  if (hexColor[0] === '#') {
    hexColor = hexColor.slice(1)
    usePound = true
  }
  let num = parseInt(hexColor, 16)

  let r = (num >> 16) + amount
  r = clamp(r, 0, 255)

  let b = ((num >> 8) & 0x00ff) + amount
  b = clamp(b, 0, 255)

  let g = (num & 0x0000ff) + amount
  g = clamp(g, 0, 255)

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

export const darken = (hexColor: string, amount: number): string => {
  let usePound = false
  if (hexColor[0] === '#') {
    hexColor = hexColor.slice(1)
    usePound = true
  }
  let num = parseInt(hexColor, 16)

  let r = (num >> 16) - amount
  r = clamp(r, 0, 255)

  let b = ((num >> 8) & 0x00ff) - amount
  b = clamp(b, 0, 255)

  let g = (num & 0x0000ff) - amount
  g = clamp(g, 0, 255)

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

export const opacity = (hexColor: string, opacity: number): string => {
  if (hexColor[0] !== '#') {
    hexColor = '#' + hexColor
  }

  if (hexColor.length > 7) {
    hexColor = hexColor.substring(0, 7)
  }

  opacity = clamp(opacity * 255, 0, 255)
  return hexColor + opacity.toString(16)
}

export const isDarkText = (hexColor: string): boolean => {
  if (hexColor[0] === '#') {
    hexColor = hexColor.slice(1)
  }
  let num = parseInt(hexColor, 16)

  let r = clamp(num >> 16, 0, 255)
  let g = clamp(num & 0x0000ff, 0, 255)
  let b = clamp((num >> 8) & 0x00ff, 0, 255)

  let yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq > 125 ? true : false
}
