import { store, html } from 'hybrids';
import Session from '~/session';



const FooterDefault = {
  session: store(Session),

  content: ({ session }) => html`

    <footer>
      footer
    </footer>

  `
}



export default host => html`

  <footer-default></footer-default>

`.define({ FooterDefault });
