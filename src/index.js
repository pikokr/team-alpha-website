import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Root from './Root';
import 'discord-components-react/dist/index.css'

ReactDOM.render(<Root />,
  document.getElementById('root')
);

serviceWorker.unregister();
