import List from 'crocks/List';

import safe from 'crocks/Maybe/safe';
import arrayToList from 'crocks/List/arrayToList';

import pipe from 'crocks/helpers/pipe';

import map from 'crocks/pointfree/map';
import either from 'crocks/pointfree/either';

import isString from 'crocks/predicates/isString';
import isNumber from 'crocks/predicates/isNumber';
import isObject from 'crocks/predicates/isObject';
import isFunction from 'crocks/predicates/isFunction';
import isEmpty from 'crocks/predicates/isEmpty';
import isIterable from 'crocks/predicates/isIterable';
import isArray from 'crocks/predicates/isArray';
import isSameType from 'crocks/predicates/isSameType';

import not from 'crocks/logic/not';



export const isElement = x => x instanceof Node;



export const safeString = safe(isString);



export const safeNumber = safe(isNumber);



export const safeObject = safe(isObject);



export const safeFunction = safe(isFunction);



export const safeNotEmpty = safe(not(isEmpty));



export const safeArray = safe(isArray);



export const safeIterable = safe(isIterable);



export const safeElement = safe(isElement);



export const safeList =
  x =>
  safe(() => isSameType(List, x), x)



export const safeRecValue =
  o =>
  k =>
  safe(not(isEmpty), o[k]);



export const safeRecValues =
  pipe(
    safeObject,
    map(Object.values),
    either(
      List.empty,
      arrayToList
    )
  );



// Misc



export const call = f => f();
