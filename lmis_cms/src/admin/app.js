// path: ./my-app/src/admin/app.js

import AuthLogo from './extensions/logo-white.png';
import MenuLogo from './extensions/logo-white.png';
import favicon from './extensions/favicon.ico';

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
   // Replace the favicon
    head: {
      favicon: favicon,
    },
    // Add a new locale, other than 'en'
    locales: ['fr', 'de'],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
    // Override or extend the theme
    theme: {
      // overwrite light theme properties
      light: {
        colors: {
          // primary100: '#478A2D',
          // primary200: '#478A2D',
          // primary500: '#478A2D',
          // primary600: '#478A2D',
          // primary700: '#478A2D',
          // danger700: '#b72b1a'
          primary100: '#f6ecfc',
          primary200: '#e0c1f4',
          primary500: '#ac73e6',
          primary600: '#9736e8',
          primary700: '#8312d1',
          danger700: '#b72b1a'
        },
      },

      // overwrite dark theme properties
      dark: {
        // primary100: '#478A2D',
        // primary200: '#478A2D',
        // primary500: '#478A2D',
        // primary600: '#478A2D',
        // primary700: '#478A2D',
        // danger700: '#b72b1a'
        primary100: '#f6ecfc',
        primary200: '#e0c1f4',
        primary500: '#ac73e6',
        primary600: '#9736e8',
        primary700: '#8312d1',
        danger700: '#b72b1a'
      }
    },
    // Extend the translations
    translations: {
      en: {
        "Auth.form.welcome.subtitle": "Log in to your LMIS account",
        "Auth.form.welcome.title": "Welcome to LMIS Admin!",
        "app.components.LeftMenu.navbrand.title": "LMIS Dashboard",
      },
    },
   // Disable video tutorials
    tutorials: false,
   // Disable notifications about new Strapi releases
    notifications: { release: false },
  },

  bootstrap() {},
};
