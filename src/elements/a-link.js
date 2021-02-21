import { store, html } from 'hybrids';
import { style } from '../helpers/style';
import Session, { navigate } from '../session';



export default {
  session: store(Session),
  href: '#',
  activeClass: 'active',
  title: '',

  render: ({
    session,
    href,
    title,
    activeClass,

  }) => style(html`

    <a
      href=${href}
      title=${title}
      class=${{
        [activeClass]: session.path === href
      }}
      onclick=${navigate({ path: href })}>

      <slot>a link</slot>
    </a>

  `)
};
