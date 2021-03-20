import tryCatch from 'crocks/Result/tryCatch';

import { define } from 'hybrids';

import { route } from './session';

import TheHeader from './pages/the-header';
import TheMain from './pages/the-main';
import TheFooter from './pages/the-footer';



const init =
  window =>
  { define({ TheHeader, TheMain, TheFooter });
    route({ path: window.location.pathname });

    window.addEventListener(
      'popstate',
      e => route({ path: e.target.location.pathname })
    );
  };



tryCatch(init)(window)
.either(
  err =>
  ( console.log(err),
    document.body.innerHTML =
    document.getElementsByTagName('noscript')[0].innerText
  ),

  () =>
  console.log('app started')
);
