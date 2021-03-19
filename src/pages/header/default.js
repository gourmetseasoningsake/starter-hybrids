import { store, html } from 'hybrids';
import Session from '~/session';



// Elements
import ALink from '~/elements/a-link';



// Events
const togglemenu = host => host.expanded = !host.expanded;



const HeaderDefault = {
  session: store(Session),
  expanded: true,

  content: ({ session, expanded }) => html`

    <header class="flex">
      <nav
        aria-label="Main"
        class=${{
          'hidden': !expanded
        }}>
        <ul class="flex">
          <li class="mr-2">
            <a-link href="/" activeClass=${'underline'}>startseite</a-link>
          </li>
          <li class="mx-2">
            <a-link href="/about" activeClass=${'underline'}>about</a-link>
          </li>
          <li class="mx-2">
            <a-link href="/en" activeClass=${'underline'}>home</a-link>
          </li>
          <li class="ml-2">
            <a-link href="/en/about" activeClass=${'underline'}>about</a-link>
          </li>
        </ul>
      </nav>

      <div class="flex-auto flex justify-end">
        <button type="button" onclick=${togglemenu}>menu</button>
      </div>
    </header>

  `
}



export default host => html`

  <header-default></header-default>

`.define({ HeaderDefault, ALink });
