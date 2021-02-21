export const pathJoin = (...args) =>
  args
  .filter(x => x.trim())
  .join('/')
  .replace(/\/+/, '/');
