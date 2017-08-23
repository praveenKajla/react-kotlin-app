import 'grommet/scss/vanilla/index.scss';
import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom';
import axios from 'axios';

import Logo from './Logo.js';
import './css/mega.css'



const PATH = 'https://api.themoviedb.org/3/';
const apiKey = 'api_key=bb396bfbcd6dc75c8a08f9e26857a1aa';
const image = "http://image.tmdb.org/t/p/original"


class Season extends Component {
	constructor(props){
		super(props);
		this.state = {
			seasonData:[],
			index:0,

		};

		
	}
	componentDidMount(){
		const {season,params} = this.props;
		
		axios.get(`${PATH}${params.type}/${params.typeid}/season/${season}?${apiKey}`)
      .then(result => {this.setState({seasonData:result.data.episodes});});

	}
	
	
	
	render(){
			const {seasonData} = this.state;
			const {season} = this.props;
			const imageUrl ='http://image.tmdb.org/t/p/original';
		       return(<div className="overall">

		       	<div style={{marginLeft:'30px'}}>
		       	<h2 style={{position:'absolute',fontFamily:'Open Sans',zIndex:'2500',fontSize:'1em',color:'white'}}>SEASON {season}</h2>
		       	{seasonData.map((item,index) => 
		       			
		       			<div className= "blob" >
		       			<img className="imageBlob"  src={imageUrl+item.still_path}/>
		       			<div className="playEpisode">
					      <div className=" buttonEp">▶</div>
					     
					      </div>
		       			<h1 className="titleText">{(item.name || item.original_title ).toUpperCase()}
		       			<a className="yearText">{(item.first_air_date || item.air_date).substr(0,4).toUpperCase()}</a></h1>

		       			


		       			
		       		
		       			</div>
		       			

		       			)}
		       			</div>
		       	
		       


   
        </div>

					
					);

	}
}

const Para= ({children}) => {
	var nth = 0;
	const str=children.substring(0,150).replace(/\s/g,function (match) {
    nth++;
    return (nth === 8|| nth==16||nth==24) ? '\n' : match;
});
	
	return(
		<pre style={{fontSize:9.5,fontFamily:'Open Sans',color:'rgba(245, 245, 245, 0.7)',paddingLeft:5}}>{str}</pre>
		);

}



export default Season;