
import IO from 'crocks/IO';
import List from 'crocks/List';

import arrayToList from 'crocks/List/arrayToList';
import getProp from 'crocks/Maybe/getProp';

import curry from 'crocks/helpers/curry';
import liftA2 from 'crocks/helpers/liftA2';

import run from 'crocks/pointfree/run';


import {
  safeString,
  safeFunction,
  safeElement,
  call
} from '~/helpers';



const isQueryId = query => query.trim().startsWith('#');



const getElm = curry(
  (query, host) =>
  IO(
    isQueryId(query) ?
    () => [ host.querySelector(query) ].filter(x => x) :
    () => [ ...host.querySelectorAll(query) ]
  )
);



const renderTarget =
  host =>
  safeElement(host)
  .chain(getProp('render'))
  .chain(safeFunction)
  .map(call);



export const ref =
  query =>
  host =>
  liftA2(
    getElm,
    safeString(query),
    renderTarget(host)
  )
  .map(run)
  .either(
    List.empty,
    arrayToList
  );
