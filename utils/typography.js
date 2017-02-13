import Typography from 'typography'

const options = {
  baseFontSize: '14px',
  baseLineHeight: '27px',
  headerFontFamily: '"Helvetica", Helvetica, Arial, sans-serif',
  bodyFontFamily: 'Helvetica, serif',
  bodyWeight: 200,
  headerWeight: 400,
  headerSize: 48,
  boldWeight: 400,
  modularScales: [
    {
      scale: 'minor third',
    },
  ],
}
const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
