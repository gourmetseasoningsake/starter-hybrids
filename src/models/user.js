import { store } from 'hybrids';
import fetch from 'unfetch';


// Example
export const User = {
  id: true,
  userId: '',
  firstName: '',
  lastName: '',
  [store.connect]: {
    get:
      userId =>
      fetch(`${process.env.API_BASE_URL}/users/${userId}`)
      .then(res => res.json())
  }
};
