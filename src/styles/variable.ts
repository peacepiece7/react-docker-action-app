export const theme = {
  primary: '#000',
  light: '#fff',
  grey: '#9e9e9e',
  transparent: 'transparent',
}

export const size = {
  maxWidth: '1200px',
}

export const font = {
  size: {
    xss: '1rem',
    sm: '1.25rem',
    base: '1.6rem',
    lg: '2rem',
    xl: '2.5rem',
    xxl: '3rem',
  },
  weight: {
    light: 300,
    normal: 400,
    bold: 700,
  },
  family: {
    Helvetica: 'Helvetica',
    Arial: 'Arial',
    sansSerif: 'sans-serif',
    serif: 'serif',
    monospace: 'monospace',
  },
  color: {
    primary: '#000',
    light: '#fff',
    grey: '#9e9e9e',
    transparent: 'transparent',
    heightlight: '#f5f5f5',
  },
}

export const border = {
  radius: {
    sm: '0.125rem',
    base: '0.25rem',
    lg: '0.5rem',
    xl: '1rem',
    xxl: '2rem',
  },
  width: {
    sm: '0.1rem',
    base: '0.2rem',
    lg: '0.4rem',
    xl: '0.8rem',
    xxl: '1.6rem',
  },
  color: {
    primary: '#000',
    light: '#fff',
    grey: '#9e9e9e',
    transparent: 'transparent',
    heightlight: '#2e5ac7',
  },
}

export const shadow = {
  sm: '0 0.8rem 1.6rem 0 rgba(0, 0, 0, 0.16)',
  base: '0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.16)',
  lg: '0 0.8rem 1.6rem 0 rgba(0, 0, 0, 0.16)',
}

export const transition = {
  to: (property: string) => `${property} 0.3s ease-in-out `,
  all: 'all 0.3s ease-in-out',
  fast: 'all 0.1s ease-in-out',
  slow: 'all 0.5s ease-in-out',
}
