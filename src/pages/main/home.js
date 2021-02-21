import { store, render, html } from 'hybrids';
import Session from '~/session';
import Settings from '~/settings';



const PageHome = {
  session: store(Session),
  settings: store(Settings),

  render: render(({ session, settings }) => html`

    <main>
      <h1 class="h1">Startseite</h1>
    </main>

  `, { shadowRoot: false })
};



export default host => html`

  <page-home></page-home>

`.define({ PageHome });
