import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    bgs: {
      primary: string
      secondary: string
    }
    contrasts: {
      primary: string
      secondary: string
    }
    elements: {
      red: string
      orange: string
      blueish: string
      green: string
      yellowish: string
    }
    gradients: {
      top: string
      right: string
      bottom: string
      left: string
    }
  }
}
