export default {
  '/':
    { path: '/',
      title: 'Startseite',
      state: { main: 'home' }
    },


  '/en':
    { path: '/en',
      title: 'Home',
      state: { main: 'en/home' }
    },


  '/about':
    { path: '/about',
      title: 'About',
      state: { main: 'about' }
    },


  '/en/about':
    { path: '/en/about',
      title: 'About',
      state: { main: 'en/about' }
    },


  '/notfound':
    { path: '/notfound',
      title: '404',
      state: { main: 'notfound' }
    }
};
