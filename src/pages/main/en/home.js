import { store, render, html } from 'hybrids';
import Session from '~/session';



const PageEnHome = {
  session: store(Session),

  render: render(({ session }) => html`

    <main>
      <h1>Home</h1>
    </main>

  `, { shadowRoot: false })
};



export default host => html`

  <page-en-home></page-en-home>

`.define({ PageEnHome });
