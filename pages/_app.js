import '@styles/globals.css'
// In your _app.js or _app.jsx file

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Add the moon icon to the library
library.add(faMoon);


function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
