import { store, html } from 'hybrids';
import { style } from '~/helpers/style';
import Session from '~/session';



export default {
  session: store(Session),

  render: (host, { session } = host) => style(html`${

    html.resolve(

      import(
        /* webpackChunkName: "header-[request]" */
        `./header/${session.state.header}.js`
      )

      .then(
        module =>
        module.default(host)
      )

      .catch(
        err =>
        html`<h1>Error while loading header ${session.state.header}: ${err.message}</h1>`
      )
    )

  }`)
};
