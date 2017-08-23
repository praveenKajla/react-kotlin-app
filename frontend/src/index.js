import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import {BrowserRouter,Link,Route,browserHistory} from 'react-router-dom'
import Main from './Main.js'

function startApp(Main){
  ReactDOM.render(
  <AppContainer>
  <BrowserRouter history={browserHistory}>
    <Main/>
    </BrowserRouter>
  </AppContainer>,
  document.getElementById('content')
);
}
startApp(Main);
if(module.hot){
   module.hot.accept("./Main", () => {  startApp(require("./Main").default); } );
}