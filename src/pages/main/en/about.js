import { store, html } from 'hybrids';
import Session from '~/session';



const PageEnAbout = {
  session: store(Session),

  content: ({ session }) => html`

    <main>
      <h1>About (en)</h1>
    </main>

  `
};



export default host => html`

  <page-en-about></page-en-about>

`.define({ PageEnAbout });
