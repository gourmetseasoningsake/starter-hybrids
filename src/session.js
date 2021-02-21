import { store } from 'hybrids';
import Routes, { mergeRoutes } from './routes';
//import { theme } from '^/tailwind.config';



import IO from 'crocks/IO';

import getProp from 'crocks/Maybe/getProp';
import liftA2 from 'crocks/helpers/liftA2';
import pipeK from 'crocks/helpers/pipeK';

import constant from 'crocks/combinators/constant';
import identity from 'crocks/combinators/identity'

import {
  safeObject,
  safeString,
  safeRecValue,
  safeRecValues,
  safeFunction,
  call
} from './helpers';

import {
  preventDefault,
  toMQList
} from './helpers/event';



const Session = mergeRoutes(Routes['/'], {});



const sessionReplace =
  session =>
  IO(
    () =>
    ( history.replaceState(
        session.state,
        session.title,
        session.path
      ),
      store.set(Session, session)
    )
  );



const sessionPush =
  session =>
  IO(
    () =>
    ( history.pushState(
        session.state,
        session.title,
        session.path
      ),
      store.set(Session, session)
    )
  );



const sessionNotfound =
  constant(
    store.set(Session, Routes['/notfound'])
  );



const safePropPath =
  pipeK(
    safeObject,
    getProp('path'),
    safeString
  );



const safeFunctionRun =
  pipeK(
    getProp('run'),
    safeFunction
  );



const safeRoute =
  pipeK(
    safePropPath,
    safeRecValue(Routes)
  );



const fromRoutes =
  session =>
  liftA2(
    mergeRoutes,
    safeRoute(session),
    safeObject(session)
  );



export const route =
  session =>
  fromRoutes(session)
  .map(sessionReplace)
  .chain(safeFunctionRun)
  .either(
    sessionNotfound,
    call
  );



export const navigate =
  session =>
  fromRoutes(session)
  .map(sessionPush)
  .chain(safeFunctionRun)
  .map(preventDefault)
  .either(
    sessionNotfound,
    identity
  );



export default Session;



// -------



(function init () {

  route({ path: window.location.pathname });



  window.addEventListener(
    'popstate',
    e => route({ path: e.target.location.pathname })
  );



  // safeRecValues(theme.screens)
  // .map(toMQList('min-width'))
  // .map(x => x.addListener(console.log))

})();
