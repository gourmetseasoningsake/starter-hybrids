import { html } from 'hybrids';



// import styles from '~/index.css.js';
// TODO: add styles to document with #toASS somewhere



const toAttrObjArr =
  nodelist =>
  [...nodelist].map(node => Object.fromEntries(
    new Map(
      node
      .getAttributeNames()
      .map(name => [name, node.getAttribute(name)])
    )
  ));



const prependStylesheetLinks =
  xs =>
  html_ =>
  html`
    ${xs.map(x => html`

      <link
        rel="stylesheet"
        href="${x.href}"
        integrity="${x.integrity || ''}"
        crossorigin="${x.crossorigin || false}">

    `)}

    ${html_}
  `;



const adoptStylesheets =
  xs =>
  html_ =>
  html_.style(...xs);



const toASS = /* @R.H. */
  x =>
  { const sheet = new CSSStyleSheet();
    sheet.replace(x);
    return sheet;
  };



export const style = (
  document =>
  prependStylesheetLinks(
    toAttrObjArr(
      [...document.head.querySelectorAll('link[rel="stylesheet"]')]
    )
  )
  // document.adoptedStyleSheets ?
  // adoptStylesheets(document.adoptedStyleSheets) :
  // prependStylesheetLinks(
  //   toAttrObjArr(
  //     [...document.head.querySelectorAll('link[rel=stylesheet]')]
  //   )
  // )
)(document);
