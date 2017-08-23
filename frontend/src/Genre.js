
import 'grommet/scss/vanilla/index.scss';
import React,{Component} from 'react';
import axios from 'axios';
import {Link,Route} from 'react-router-dom';
import Logo from './Logo.js';
import './css/genre.css';
import './css/animate.css';
import Header from './Header'
const PATH = 'https://api.themoviedb.org/3/';
const MOVIE_GENRE = 'genre/movie/list?'
const TV_GENRE = 'genre/tv/list?'
const apiKey = 'api_key=bb396bfbcd6dc75c8a08f9e26857a1aa';

class Genre extends Component {
	constructor(props){
		super(props);
		this.state = {
			genres:[],
			current:"",
			animated:'zoomIn'
		};

	}
	componentDidMount(){	
		axios.get(`${PATH}${MOVIE_GENRE}${apiKey}`)
	       .then(response => {this.setState({genres:response.data.genres,current:this.props.match.params.type,animated:'slideInLeft'});});
	   
	}
	
	render(){
			const {genres} = this.state;
			const {params} = this.props.match;
			const imageUrl ='http://image.tmdb.org/t/p/original/';
			const arr =[0,4,8,12];
		       return(

		       		<div>
		       		
                    <Header/>
		       			{arr.map(i => 
						     <div id="motion" className={'rowInnerG animated '+this.state.animated} key={i}>
						     <div >

						   	{
						   		genres.slice(i,i+4).map(item =>
								   	<Link  to={`/a/movie/${item.name}/${item.id}`}	key={item.id}>						   	 
								   		<div id="card" style={{backgroundColor:`${(i%2===0)?'white':'red'}`}}className="cardG animated zoomIn">	
											<h2 style={{marginLeft:'5%',marginTop:'25%',textAlign:'center',fontSize:'1.5em',opacity:1,color:'#f7f7f7'}}>{item.name}</h2>
									      </div>
									</Link>
									)
					    	}
									          
							</div>			   
					  
					</div>)}
		       		</div>

					
					);

	}
}




export default Genre;