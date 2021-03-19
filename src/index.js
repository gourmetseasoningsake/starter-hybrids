import tryCatch from 'crocks/Result/tryCatch';

import { define } from 'hybrids';
import TheHeader from './pages/the-header';
import TheMain from './pages/the-main';
import TheFooter from './pages/the-footer'


tryCatch(define)(
  { TheHeader,
    TheMain,
    TheFooter
  }
)
.either(
  err =>
  ( console.log(err),
    document.body.innerHTML =
    document.getElementsByTagName('noscript')[0].innerText
  ),

  () =>
  console.log('app started')
);
