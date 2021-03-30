import liftA3 from 'crocks/helpers/liftA3';

import {
  safeFunction,
  safeObject,
  safeElement
} from '~/helpers';



const createMutationObserver =
  f =>
  new MutationObserver(
    (xs, observer) =>
    xs.forEach(
      x =>
      f(x, observer)
    )
  );



export const mutationObserver =
  (f, o, el) =>
  liftA3(
    f =>
    o =>
    el =>
    createMutationObserver(f).observe(el, o),
    safeFunction(f),
    safeObject(o),
    safeElement(el)
  );



export const isChildList =
  entry =>
  entry.type === 'childList';



const createIntersectionObserver =
  (f, o) =>
  new IntersectionObserver(
    (xs, observer) =>
    xs.forEach(
      x =>
      f(x, observer)
    ),
    o
  );



export const intersectionObserver =
  (f, o, el) =>
  liftA3(
    f =>
    o =>
    el =>
    createIntersectionObserver(f, o).observe(el),
    safeFunction(f),
    safeObject(o),
    safeElement(el)
  );



export const isIntersecting =
  entry =>
  entry.isIntersecting;
