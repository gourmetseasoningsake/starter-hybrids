import { store, html } from 'hybrids';
import { style } from '~/helpers/style';
import Session from '~/session';



import { fadeOut, fadeIn } from '~/animations';



const transitionOut =
  host =>
  fadeOut(host, { timeScale: 2 })



const transitionIn =
  host =>
  fadeIn(host, { timeScale: 2.5, delay: 0.2 })



export default {
  session: store(Session),

  render: (host, { session } = host) => style(html`${

    html.resolve(

      transitionOut(host).run()

      .then(
        () => // NB: animTimeline =>
        import(
          /* webpackChunkName: "main-[request]" */
          `./main/${session.state.main}.js`
        )
      )

      .then(
        module =>
        ( transitionIn(host).run(),
          module.default(host)
        )
      )

      .catch(
        err =>
        html`<h1>Error while loading main ${session.title}: ${err.message}${console.log(err)}</h1>`
      )
    )

  }`)
};



// NB: testing
// const TheJsonLd = {
//   session: store(Session),
//   render: render(({ session }) => html`
//     <script type="application/ld+json">
//       { "@context": "http://schema.org/",
//         "@type": "Person",
//         "name": "E. XampLe",
//         "jobTitle": "Professor",
//         "telephone": "(425) 123-4567",
//         "url": "http://www.example.org"
//       }
//     </script>
//   `, { shadowRoot: false })
// };
