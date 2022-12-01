import type { DefaultTheme } from 'styled-components'

const light: DefaultTheme = {
  title: 'light',
  bgs: {
    primary: '#fff',
    secondary: '#f5f5f5'
  },
  fonts: {
    primary: '#000',
    secondary: '#333'
  },
  elements: {
    red: '#d7263d',
    orange: '#f46036',
    blueish: '#2e294e',
    green: '#1b998b',
    yellowish: '#c5d86d'
  },
  gradients: {
    top: 'linear-gradient(0deg, #d7263dff, #f46036ff, #2e294eff, #1b998bff, #c5d86dff)',
    right: 'linear-gradient(90deg, #d7263dff, #f46036ff, #2e294eff, #1b998bff, #c5d86dff',
    bottom: 'linear-gradient(180deg, #d7263dff, #f46036ff, #2e294eff, #1b998bff, #c5d86dff)',
    left: 'linear-gradient(270deg, #d7263dff, #f46036ff, #2e294eff, #1b998bff, #c5d86dff)'
  }
}

export default light
