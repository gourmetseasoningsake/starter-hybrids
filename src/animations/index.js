import { gsap } from 'gsap';



import IO from 'crocks/IO';
import List from 'crocks/List';
import Maybe from 'crocks/Maybe';

import listToArray from 'crocks/List/listToArray';
import safe from 'crocks/Maybe/safe';
import getProp from 'crocks/Maybe/getProp';

import pipe from 'crocks/helpers/pipe';
import liftN from 'crocks/helpers/liftN';
import omit from 'crocks/helpers/omit';
import curry from 'crocks/helpers/curry';

import filter from 'crocks/pointfree/filter';
import map from 'crocks/pointfree/map';
import chain from 'crocks/pointfree/chain';
import coalesce from 'crocks/pointfree/coalesce';

import constant from 'crocks/combinators/constant';
import identity from 'crocks/combinators/identity';

import ifElse from 'crocks/logic/ifElse';

import {
  safeObject,
  safeFunction,
  safeList,
  safeNumber,
  isElement
} from '~/helpers';



/** gte :: Number -> Number -> Boolean */
const gte = x => y => y >= x;



/** safeListElements :: List a -> Maybe List a */
const safeListElements =
  pipe(
    safeList,
    map(filter(isElement))
  );



/** toJustList :: a -> Maybe List a */
const toJustList =
  pipe(
    List.of,
    Maybe.of
  );



/** ensureArrayWithElements :: a -> Array */
const ensureArrayWithElements =
  pipe(
    ifElse(
      isElement,
      toJustList,
      safeListElements
    ),
    map(listToArray)
  );



/** safeObjectOptions :: a -> Maybe Object */
const safeObjectOptions =
  pipe(
    safeObject,
    map(omit(['timeScale'])),
    coalesce(constant({}), identity)
  );



// QUESTION: pipeK?
/** safeNumberTimeScale :: a -> Maybe Number */
const safeNumberTimeScale =
  pipe(
    safeObject,
    chain(getProp('timeScale')),
    chain(safeNumber),
    chain(safe(gte(0))),
    coalesce(constant(1), identity)
  );



// QUESTION: use Result in IO? (see below)
/** runResolve :: IO */
const runResolve =
  IO(
    () =>
    Promise.resolve('failed')
  );



// QUESTION: use Result in IO ?
const animToIO =
  curry((f, xs, o, n) => IO(
    () =>
    gsap
    .timeline(o)
    .timeScale(n)
    .add(f(xs))
  ));



/** anim :: ([a] -> Object) -> (a, b) -> IO Object */
export const anim =
  f =>
  (x, o) =>
  liftN(
    4,
    animToIO,
    safeFunction(f),
    ensureArrayWithElements(x),
    safeObjectOptions(o),
    safeNumberTimeScale(o)
  )
  .option(runResolve)



/** fadeOut :: (a, b) -> IO Object */
export const fadeOut =
  anim(
    xs =>
    gsap
    .timeline()
    .to(xs, {
      opacity: 0
    })
  );



/** fadeIn :: (a, b) -> IO Object */
export const fadeIn =
  anim(
    xs =>
    gsap
    .timeline()
    .to(xs, {
      opacity: 1
    })
  );
