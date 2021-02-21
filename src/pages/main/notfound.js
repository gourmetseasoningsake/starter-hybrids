import { store, render, html } from 'hybrids';
import Session from '~/session';



const PageNotfound = {
  session: store(Session),

  render: render(({ session }) => html`

    <main>
      <h1>Not Found</h1>
    </main>

  `, { shadowRoot: false })
};



export default host => html`

  <page-notfound></page-notfound>

`.define({ PageNotfound });
