import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link,Route,browserHistory} from 'react-router-dom';
import LandingPage from './LandingPage';
import Genre from './Genre'
import Movie from './Movie'
import Titles from './Titles'
import Box from 'grommet/components/Box';
import App from 'grommet/components/App';
import Renegade from './Renegade'

import MyList from './MyList'
import Individual from './Individual'

import './css/main.css'
class Main extends Component {
  render() {

    return (

    <div >

      <App centered={false} style={{backgroundColor:"#0a1116"}}>
      <Route exact path='/' component={LandingPage}/>
      <Route exact={true}  path='/genre/:type' component={Genre}/>    
      <Route exact={true}  path='/a/:type/:name/:id' component={Renegade}/>                                           
      </App>



       <Route   path='/:user/list' component={MyList}/>
       <Route exact={true} path='/title/:type/:typeid' component={Movie}/>                                                            
       <Route exact={true} path='/content/:type/:typeid' component={Individual}/>
    </div>
    );
  }
};

export default Main;