import 'grommet/scss/vanilla/index.scss';
import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom';
import Logo from './Logo.js';
import './css/mega.css'
import ReactModal from 'react-modal';

class Mega extends Component {
	constructor(props){
		super(props);
		this.state = {
			showModal:false,
			index:0,
		};

		this.activate = this.activate.bind(this);
	}
	activate(item,index){
		this.props.getDetails(item);
		this.setState({index:index});
	}
	
	
	render(){
		
			const {base,title,toptv} = this.props;
			const imageUrl ='http://image.tmdb.org/t/p/original';
			const arr =[0,4,8,12];
		       return(<div className="overall">
		       	<div style={{marginLeft:'30px'}}>
		       	{toptv.map((item,index) => 
		       			
		       			<div key={item.id} className={(index==this.state.index) ? "blobActive" : "blob"} onClick={() => this.activate(item,index)} >
		       			<img className="imageBlob"  src={imageUrl+item.poster_path}/>
		       			<h1 className="titleText">{(item.original_name || item.original_title ).toUpperCase()}
		       			<a className="yearText">{(item.first_air_date || item.release_date).substr(0,4).toUpperCase()}</a></h1>

		       			


		       			
		       		
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



export default Mega;