// import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11' // For IE 11 support
import 'react-app-polyfill/stable'
import './polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import 'assets/css/my-custom.css'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
