import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom';
import axios from 'axios';
import ReactModal from 'react-modal';

import LinkPreviousIcon from 'grommet/components/icons/base/LinkPrevious';
import Similar from './Similar'
import Info from './views/Info'
import Season from './Season'
import Circles from './Circles'
import './css/episodes.css'
const PATH = 'https://api.themoviedb.org/3/';
const apiKey = 'api_key=bb396bfbcd6dc75c8a08f9e26857a1aa';
const image = "http://image.tmdb.org/t/p/original"


class Individual extends Component{
   constructor(props){
    super(props);
    this.state = {
      details:{},
      similar:[],
      isLoading:true,
      isDelete:false,

    };
    this.delete = this.delete.bind(this);

  }

  delete(){
    this.setState({isDelete:false,isLoading:true})
    const {params} = this.props.match;
    const {details} = this.state;
    axios.delete(`http://localhost:8090/api/${params.type}/praveen/${details.id}`)
      .then(response => this.props.history.goBack());

  }


  componentWillMount(){
     const {params} = this.props.match;
     axios.get(`${PATH}${params.type}/${params.typeid}?${apiKey}`)
      .then(result => {this.setState({details:result.data,isLoading:false});});
      
    axios.get(`${PATH}${params.type}/${params.typeid}/similar?${apiKey}`)
      .then(result => {this.setState({similar:result.data.results});});
  }
  
  render(){
    const {details,isLoading} = this.state;
    const {params} = this.props.match;
    
    return(
       <div style={{backgroundSize:'cover',backgroundImage:`url("${image+details.backdrop_path}")`}} className="vignetteML"> 
        <button className="backButton" onClick={this.props.history.goBack}><LinkPreviousIcon/></button> 
            <div className="continueW">
            {(isLoading) 
            ?
            <Circles />
            :
            <Info currentItem={details} />
          }
            </div>

            <div className="resume">
              <div className=" buttonB">▶</div>
            </div>
            <div >
            <button href="/home"className="buttonDelete" onClick={() => this.setState({isDelete:true})}>
            Delete </button>
            <button href="/home"className="buttonDelete" >
            Update </button>
            </div>
            <div className="mylist">
            {(params.type=="movie") 
            ? <Similar base='movie' params={params} toptv={this.state.similar} />
            :
            <div>

            <Season season={1} params={params}/>
            <Season season={2} params={params}/>
          </div>
        }
          </div>

           <ReactModal  className="animated bounceInDown modal"
           style={{ overlay : {
                    position          : 'absolute',
                    backgroundColor   : 'rgba(0, 0, 0, 0.3)'
                  }}}
           isOpen={this.state.isDelete} >
           <a className="dropText">Are You Sure You Want to Delete this ?</a>
           <button className="buttonF" onClick={() => this.delete()}>Yes</button>
           <button className="buttonXX" onClick={() => this.setState({isDelete:false})}>X</button>
          </ReactModal> 

          <ReactModal  className="animated bounceInDown modal"
           style={{ overlay : {
                    position          : 'absolute',
                    backgroundColor   : 'rgba(0, 0, 0, 0.3)'
                  }}}
           isOpen={this.state.isDelete} >
           <a className="dropText">Are You Sure You Want to Delete this ?</a>
           <button className="buttonF" onClick={() => this.delete()}>Yes</button>
           <button className="buttonXX" onClick={() => this.setState({isDelete:false})}>X</button>
          </ReactModal>    
            
          </div>


    )
  }
}
export default Individual;