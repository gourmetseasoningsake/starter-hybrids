export const preventDefault =
  f =>
  (host, e) =>
  ( e.preventDefault(), f(host, e) );



export const toMQList =
  k =>
  x =>
  window.matchMedia(`(${k}: ${x})`);
