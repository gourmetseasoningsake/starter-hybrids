import { store, render, html } from 'hybrids';
import Session from '~/session';



const PageAbout = {
  session: store(Session),

  render: render(({ session }) => html`

    <main>
      <h1>About</h1>
    </main>

  `, { shadowRoot: false })
};



export default host => html`

  <page-about></page-about>

`.define({ PageAbout });
