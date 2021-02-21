import { store, render, html } from 'hybrids';
import Session from '~/session';



const FooterDefault = {
  session: store(Session),

  render: render(({ session }) => html`

    <footer>
      footer
    </footer>

  `, { shadowRoot: false })
}



export default host => html`

  <footer-default></footer-default>

`.define({ FooterDefault });
