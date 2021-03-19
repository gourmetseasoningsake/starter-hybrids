import { store, html } from 'hybrids';
import Session from '~/session';



const PageEnHome = {
  session: store(Session),

  content: ({ session }) => html`

    <main>
      <h1>Home</h1>
    </main>

  `
};



export default host => html`

  <page-en-home></page-en-home>

`.define({ PageEnHome });
