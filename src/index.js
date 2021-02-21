import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
// import 'core-js/modules/es.weak-map'; /* NB: hybrids store for broken WeakMap in IE11 */



import maybeToAsync from 'crocks/Async/maybeToAsync';
import getProp from 'crocks/Maybe/getProp';
import pipeK from 'crocks/helpers/pipeK';

import {
  safeObject,
  safeFunction
} from './helpers';



import { define } from 'hybrids';
import TheHeader from './pages/the-header';
import TheMain from './pages/the-main';
import TheFooter from './pages/the-footer'



const getWaitFn =
  pipeK(
    safeObject,
    getProp('waitFor'),
    safeFunction
  );



maybeToAsync(
  'Bad',
  getWaitFn(window.WebComponents)
)
.map(f => f(
  () =>
  define({ TheHeader, TheMain, TheFooter })
))
.fork(
  () =>
  document.body.innerHTML =
  document.getElementsByTagName('noscript')[0].innerText,

  () =>
  console.log('app started')
);
