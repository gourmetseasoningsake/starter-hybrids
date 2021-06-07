import { store, html } from 'hybrids';
import Session from '~/session';


const PageAbout = {
  session: store(Session),

  content: ({ session }) => html`

    <main>
      <h1>About</h1>
    </main>

  `
};



export default host => html`

  <page-about></page-about>

`.define({ PageAbout });
