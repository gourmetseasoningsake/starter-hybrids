import { store, html } from 'hybrids';
import Session from '~/session';



const PageNotfound = {
  session: store(Session),

  content: ({ session }) => html`

    <main>
      <h1>Not Found</h1>
    </main>

  `
};



export default host => html`

  <page-notfound></page-notfound>

`.define({ PageNotfound });
