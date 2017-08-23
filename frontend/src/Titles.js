import 'grommet/scss/vanilla/index.scss';
import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom';
import Logo from './Logo.js';
import './css/title.css';
import './css/animate.css';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';


 const Titles = ({base,title,toptv}) => {
	
			const imageUrl ='http://image.tmdb.org/t/p/original/';
			const arr =[0,4,8,12];
		       return(
		       		<Box pad='medium' className="animated bounceInUp">
						<h1 style={{letterSpacing:'-3px',fontWeight:800,marginBottom:'-10px'}}id="genreHead"className="rowInner headText animated slideInUp">{title.toUpperCase()}</h1>
								   
						{
							arr.map(i => 
						     <div className="rowInner" key={i}>
						     <div >
						   	{
						   		toptv.slice(i,i+4).map(item =>							   	 
							   		<Link to={`/title/${base}/${item.id}`} key={item.id}>
							   		<div  id="card" style={{backgroundImage:`url(${imageUrl+item.backdrop_path})`}}className="card animated zoomIn">
										<div className="topbg">
										<div className="detailsOverlay">		
										<h2 style={{fontSize:'1.5em',opacity:1,color:'#fff'}}>{item.title||item.original_name}</h2>
								      
								      </div>
								      </div>
								      </div>
								      </Link>
								    )
							}
							          
						  </div>			   
			  
						</div>)
					   }		
					
				</Box>	
					
					);

	}

export default Titles;