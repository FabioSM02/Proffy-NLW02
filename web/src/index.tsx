import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// injeta o codigo da linha 6 a 8 apos ele procurar um elemento com o id root
// componentes no react sempre com a primeira linha maiuscula exemplo App na linha 7