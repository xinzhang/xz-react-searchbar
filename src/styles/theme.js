function getTheme() {
  return {
    bodyFontSize: '12px',
    bodyFontFamily: 'Barlow, Arial, sans-serif',
    whiteColor: '#ffffff',
    blackColor: '#000000',

    // Reserved for rebass/grid
    // https://github.com/rebassjs/grid#theming
    breakpoints: ['40em', '52em', '64em'], // if any are added, make sure to update ./media.js

    // storybook
    name: process.env.REACT_APP_PRODUCT_NAME,

    // Base colors
    primary: '#f36241',
    secondary: '#000000',

    backgroundPrimary: '#1f2f37',

    primaryActive: '#0f77b3',

    border: 'rgba(0, 0, 0, 0.2)',
    secondaryBorder: 'rgba(255, 255, 255, 0.16)',

    primaryText: 'rgba(0, 0, 0, 1)',
    secondaryText: 'rgba(255, 255, 255, 0.7)',

    // gradient
    gradient: 'rgba(241, 241, 241, 0), rgba(0, 0, 0, 0.3)',
    backgroundGradient:
      'linear-gradient(45deg, rgba(2, 0, 36, 1) 70%, rgba(31, 84, 115, 1) 100%)',
  };
}

const theme = getTheme();

export default theme;
