import { store, html } from 'hybrids';
import Session from '~/session';
import Settings from '~/settings';


// Elements

import ChartBarBasic from '~/elements/charts/bar-basic';


const PageHome = {
  session: store(Session),
  settings: store(Settings),

  content: ({ session, settings }) => html`

    <main>
      <h1 class="h1">Startseite</h1>
      <chart-bar-basic></chart-bar-basic>
    </main>

  `.define({ ChartBarBasic })
};



export default host => html`

  <page-home></page-home>

`.define({ PageHome });
