import { store } from 'hybrids';



const Settings = {

  main: {
    fadeOut: false,
    fadeIn: false,
    visible: true
  },

  header: {},

  footer: {}

};



const setMain =
  o =>
  store.set(Settings, { main: o });



const setHeader =
  o =>
  store.set(Settings, { header: o });



const setFooter =
  o =>
  store.set(Settings, { footer: o });



export const mainFadeOut = () => {
  const done = new Promise(res => setTimeout(() => res('done'), 500));
  return done;
};


export default Settings;
