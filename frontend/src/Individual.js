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
      isUpdate:false,

    };
    this.delete = this.delete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  delete(){
    this.setState({isDelete:false,isLoading:true})
    const {params} = this.props.match;
    const {details} = this.state;
    axios.delete(`http://localhost:8090/api/${params.type}/praveen/${details.id}`)
      .then(response => this.props.history.goBack());

  }

  handleChange(event){
    const {details} = this.state;
    this.setState({details:{...details,[event.target.name]:event.target.value}});
    event.preventDefault()
  }

  componentWillMount(){
     const {params} = this.props.match;

     axios.get(`http://localhost:8090/api/get/${params.type}/praveen/${params.typeid}`)
      .then(result => {console.log(result.data);this.setState({details:result.data,isLoading:false});});
      
    axios.get(`${PATH}${params.type}/${params.typeid}/similar?${apiKey}`)
      .then(result => {this.setState({similar:result.data.results});});
  }

  updateChanges(){
    this.setState({isUpdate:false,isLoading:true})
    const {type} = this.props.match.params;
    const item = this.state.details;
  if(type=="movie"){
    item.video = {}
   axios.post('http://localhost:8090/api/movie/praveen',
              item).then(response => 
                 this.setState({isLoading:false})                          
              )
  }
  else{
   axios.post('http://localhost:8090/api/tv/praveen',
              item).then(response => this.setState({isLoading:false}) )
    }
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
            <button href="/home"className="buttonDelete" onClick={() => this.setState({isUpdate:true})}>
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
                contentLabel="delete"
           isOpen={this.state.isDelete} >
           <a className="dropText">Are You Sure You Want to Delete this ?</a>
           <button className="buttonF" onClick={() => this.delete()}>Yes</button>
           <button className="buttonXX" onClick={() => this.setState({isDelete:false})}>X</button>
          </ReactModal> 

          <ReactModal  className="animated bounceInDown modalUpdate"
           style={{ overlay : {
                    position          : 'absolute',
                    backgroundColor   : 'rgba(0, 0, 0, 0.3)'
                  }}}
            contentLabel="update"      
           isOpen={this.state.isUpdate} >


          <div className="short">
           {(params.type=="movie")
          ?
          <div>
            <p className="overviewText">Title</p>
                    <input className="inpTitle"type="text" value={details.original_title} name="original_title" onChange={this.handleChange} />
          </div>
          :
          <div>
            <p className="shortText">Title</p>
                    <input className="inpTitle"type="text" value={details.original_name} name="original_name" onChange={this.handleChange} />
          </div>
          }
           
         </div>

           <p className="overviewText">Overview</p>
          <textarea className="inpOverview"type="text" value={details.overview} name="overview" onChange={this.handleChange} />

          <div className="short" >
          {(params.type=="movie")
          ?
          <div>
            <p className="shortText">Release Date</p>
                    <input className="inpRelease"type="text" value={details.release_date} name="release_date" onChange={this.handleChange} />
          </div>
          :
          <div>
            <p className="shortText">First AirDate</p>
                    <input className="inpRelease"type="text" value={details.first_air_date} name="first_air_date" onChange={this.handleChange} />
          </div>
          }
           <p className="shortText">Vote Average</p>
          <input className="inpRelease"type="text" value={details.vote_average} name="vote_average" onChange={this.handleChange} />
          <p className="shortText">Popularity</p>
          <input className="inpRelease"type="text" value={details.popularity} name="popularity" onChange={this.handleChange} />
          </div>


          <button className="buttonF" onClick={() => this.updateChanges()}>Update</button>
          <button className="buttonXX" onClick={() => this.setState({isUpdate:false})}>X</button>
          </ReactModal>    
            
          </div>


    )
  }
}
export default Individual;