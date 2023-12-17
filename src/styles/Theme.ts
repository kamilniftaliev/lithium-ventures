import { DefaultTheme } from 'styled-components'

export const darkTheme: DefaultTheme = {
  isDark: true,
  colors: {
    bg: {
      primary: '#232133',
      tableRow: '#292b3d',
      warning: '#ffefc3',
      error: '#ffc7c7',
      highlighted: '#7a7a7e',
    },
    brand: {
      primary: '#999dff',
    },
    border: {
      default: '#767484',
      hovered: '#6c72ff',
    },
    text: {
      primary: '#fff',
      secondary: '#909090',
      warning: '#865100',
      error: '#9d0202',
    },
    status: {
      Pending: '#5e5e5e',
      Completed: '#068b39',
    }
  },
  shadows: {
    xs: '0 2px 5px rgba(255, 255, 255, 0.1)',
  }
}

export const lightTheme: DefaultTheme = {
  colors: {
    bg: {
      primary: '#fff',
      tableRow: '#F4F4F480',
      warning: '#ffefc3',
      error: '#ffc7c7',
      highlighted: '#ccc',
    },
    brand: {
      primary: '#999dff',
    },
    border: {
      default: '#d3d3d3',
      hovered: '#6c72ff',
    },
    text: {
      primary: '#1A1D1F',
      secondary: '#6F767E',
      warning: '#865100',
      error: '#9d0202',
    },
    status: {
      Pending: "#6F767E66",
      Completed: "#60CA57",
    }
  },
  shadows: {
    xs: '0 2px 5px rgba(0, 0, 0, 0.1)',
  }
}