import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom';

import axios from 'axios';

import Anchor from 'grommet/components/Anchor';
import LinkPreviousIcon from 'grommet/components/icons/base/LinkPrevious';


import Header from './views/Header'
import SVGM from './SVGM'
import Titles from './Titles'
import Overview from './Overview.js';

import './css/animate.css';
import './css/movie.css';
import './css/main.css';


const PATH = 'https://api.themoviedb.org/3/';
const apiKey = 'api_key=bb396bfbcd6dc75c8a08f9e26857a1aa';
const imageUrl ='http://image.tmdb.org/t/p/original/';

class Movie extends Component{

constructor(props){
    super(props);
    this.state={
      cat:"overview",
      isAlready:false,
     details:[],
     isPresent:{},
     similiar:[],
    }
    this.getSimilar = this.getSimilar.bind(this);
    this.getOverview = this.getOverview.bind(this); 
    this.getDetails = this.getDetails.bind(this);
  }

  getDetails(params){
    console.log(`api/${params.type}/praveen/${params.typeid}`)
    axios.get(`${PATH}${params.type}/${params.typeid}?${apiKey}`)
      .then(result => {this.setState({details:result.data});});

   axios.get(`http://localhost:8090/api/${params.type}/praveen/${params.typeid}`)
      .then(result => {
                        this.setState({isAlready:result.data})});  
  }

  getOverview(){
    this.setState({cat:"overview"})
  }

  getSimilar(){
    const {params} = this.props.match;
    this.setState({cat:"similar"})
    axios.get(`${PATH}${params.type}/${params.typeid}/similar?${apiKey}`)
      .then(result => {console.log(result);this.setState({similiar:result.data.results.slice(0,12)});});
  }


  componentWillReceiveProps(nextProps){
    const {params} = nextProps.match;  
    this.setState({cat:"overview"})
    this.getDetails(params) 
  }
   
  componentDidMount(){
     const {params} = this.props.match;
     this.getDetails(params)
   }

  render(){

    const {details,isAlready,cat} = this.state;
    const {url} = this.props.match;
    const {type,typeid} = this.props.match.params;
    const name = details.title || details.original_name;
    
    return(
          <div style={{backgroundImage:`url('${imageUrl+details.backdrop_path}')`}} 
               className="vignetteM">   
          
          <button className="backButton" 
                  onClick={this.props.history.goBack}>
                  <LinkPreviousIcon/>
          </button> 
          

          <Header cat={this.state.cat} 
                  getOverview={ () => this.getOverview} 
                  getSimilar={() => this.getSimilar()} />

         

          {
            (this.state.cat=="overview") 
          ? <Overview type={type} params={this.props.match.params} state={this.state} goBack={this.props.history.goBack}/>
          : <div className="simList">
            <Titles base={type} title={'Similar'} toptv={this.state.similiar} />
            </div>
          }

          </div>
      )
  }

}


export default Movie;