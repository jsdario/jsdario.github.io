import Typography from "typography"

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Merriweather', 'sans-serif', 'Arial'],
  bodyFontFamily: ['Merriweather Sans', 'serif'],
  bodyWeight: '400',
  headerWeight: '800',
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    a: {
      textDecoration: 'none',
      color: '#7FDBB6',
    },
    'a:hover': {
      textDecoration: 'underline',
    },
  })
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
