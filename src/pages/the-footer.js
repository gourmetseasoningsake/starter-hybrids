import { store, html } from 'hybrids';
import { style } from '~/helpers/style';
import Session from '~/session';



export default {
  session: store(Session),

  render: (host, { session } = host) => style(html`${

    html.resolve(

      import(
        /* webpackChunkName: "footer-[request]" */
        `./footer/${session.state.footer}.js`
      )

      .then(
        module =>
        module.default(host)
      )

      .catch(
        err =>
        html`<h1>Error while loading footer ${session.state.footer}: ${err.message}</h1>`
      )
    )

  }`)
};
