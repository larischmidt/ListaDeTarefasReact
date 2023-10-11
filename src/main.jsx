import React from 'react'
import ReactDOM from 'react-dom/client'
import ListaDeTarefas from './Page/ListaDeTarefas.jsx'
import { StyleGlobal } from './Styles/GlobalStyle.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyleGlobal/>
    <ListaDeTarefas/>
  </React.StrictMode>,
)
