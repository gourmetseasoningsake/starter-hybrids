import { store, html } from 'hybrids';
import Session from '~/session';
import Settings from '~/settings';


const PageHome = {
  session: store(Session),
  settings: store(Settings),

  content: ({ session, settings }) => html`

    <main>
      <h1 class="h1">Startseite</h1>
    </main>

  `
};



export default host => html`

  <page-home></page-home>

`.define({ PageHome });
