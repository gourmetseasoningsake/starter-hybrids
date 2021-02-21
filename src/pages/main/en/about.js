import { store, render, html } from 'hybrids';
import Session from '~/session';



const PageEnAbout = {
  session: store(Session),

  render: render(({ session }) => html`

    <main>
      <h1>About (en)</h1>
    </main>

  `, { shadowRoot: false })
};



export default host => html`

  <page-en-about></page-en-about>

`.define({ PageEnAbout });
