import curry from 'crocks/helpers/curry';



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



export const mergeRoutes = curry(
  (a, b) =>
  ({
    path: b.path || a.path,
    title: b.title || a.title || '',
    state: {
      header: 'default',
      footer: 'default',
      ...a.state,
      ...b.state
    }
  })
);
