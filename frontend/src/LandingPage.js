import 'grommet/scss/vanilla/index.scss';
import React,{Component} from 'react';
import Logo from './Logo';
import axios from 'axios';
import Titles from './Titles';
import './css/App.css';
import Genre from './Genre';
import Box from 'grommet/components/Box';
import Header from './Header'

const PATH = 'https://api.themoviedb.org/3/';
const PATH_SEARCH= 'search/multi?';
const PATH_TOPTV = 'discover/tv?';
const PATH_TRENDING = 'discover/movie?';

const apiKey = 'api_key=bb396bfbcd6dc75c8a08f9e26857a1aa';
const PATH_QUERY = '&query=';
const PATH_SORT = '&sort_by=popularity.desc&page=1';



class LandingPage extends Component{

	constructor(props){
		super(props);
		this.state = {
			toptv:[],
			trending:[],
			

		};
		
	}
	getInitialState(){
		if(this.state.toptv.length===0){
			fetch(`${PATH}${PATH_TOPTV}${apiKey}${PATH_SORT}`)
	       .then(response => response.json())
	       .then(result =>{ console.log(result.results);this.setState({toptv:result.results})});

		}
		if(this.state.trending.length===0){
			fetch(`${PATH}${PATH_TRENDING}${apiKey}${PATH_SORT}`)
	       .then(response => response.json())
	       .then(result =>  {console.log(result.results);this.setState({trending:result.results})});

		}
		
	}



	render(){

		return(	
			<Box>
			{this.getInitialState()}
					
                 <Header/>

				<Titles base='tv' title={'Top TV Shows'} toptv={this.state.toptv} />
				<Titles base='movie'title={'Trending now'} toptv={this.state.trending} />			
			
			</Box>
			
			);
	}


}


export  default LandingPage;