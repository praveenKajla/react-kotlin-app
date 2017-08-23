import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom';
import axios from 'axios';
import './css/mylist.css'
import Mega from './Mega'
import Info from './views/Info'
import Circles from './Circles'
import SearchBar from './containers/SearchBar'
import ReactModal from 'react-modal';
import DownIcon from 'grommet/components/icons/base/Down';
import Header from 'grommet/components/Header';
import Pulse from 'grommet/components/icons/Pulse';

import Select from 'grommet/components/Select';

const PATH = 'https://api.themoviedb.org/3/';
const PATH_SEARCH= 'search/';
const apiKey = 'api_key=bb396bfbcd6dc75c8a08f9e26857a1aa';
const PATH_QUERY = '&query=';
const PATH_SORT = '&sort_by=popularity.desc&page=1';
const image = "http://image.tmdb.org/t/p/original"

const PATH_TOPTV = 'discover/tv?';



class Content extends Component{
   constructor(props){
    super(props);
    this.state = {
      currentItem:{},
      myStuff:[],
     searchTerm:"",
     searchResults:[],
     searchBool:false,
     isLoading:true,
    };
    this.fillSearch = this.fillSearch.bind(this);
    this.SearchInput = this.SearchInput.bind(this);

  }
  changeItem(item){
    this.setState({currentItem:item});
    this.props.getBackground(item.backdrop_path);
  }
  componentWillReceiveProps(nextProps){
    if(this.props.type!=nextProps.type){
      axios.get(`http://localhost:8090/api/${nextProps.type}/praveen`)
    .then(response => { 
                      this.setState({myStuff:response.data,currentItem:response.data[0],isLoading:false});
                      this.props.getBackground(response.data[0].backdrop_path);
                    })
    }
  }
  componentDidMount(){
    const {type} = this.props;
    axios.get(`http://localhost:8090/api/${type}/praveen`)
    .then(response => {
                      console.log(response.data);
                      this.setState({myStuff:response.data,currentItem:response.data[0],isLoading:false})
                      this.props.getBackground(response.data[0].backdrop_path);
                        })
  }
  fillSearch(event){
    this.setState({searchTerm:event.target.value});
    event.preventDefault();
    this.SearchInput();
  }
  SearchInput(){
    const {searchTerm} = this.state;
    const {type} = this.props;
    axios.get(`${PATH}${PATH_SEARCH}${type}?${apiKey}${PATH_QUERY}${searchTerm}`)
    .then(response => {this.setState({searchResults:response.data.results,searchBool:true})})

  }
  isAlready(item){
    const {myStuff} = this.state;

    const lookup = myStuff.map(stuff => stuff.id)
    const aa = lookup.includes(item.toString())
    return aa
  }
  render(){
    const {searchTerm,searchResults,searchBool,myStuff,currentItem,isLoading} = this.state;
    const {type} = this.props;
    
    return(
           <div>
           <SearchBar myStuff={myStuff} type={type} />
          <div >

          <div className="continueW">
          {(isLoading) 
            ?
            <Circles />
            :
            <Info currentItem={currentItem} />
          }
          <Link to={`/content/${type}/${currentItem.id}`} >
         <button href="/home"className="buttonMore">
            More</button>
        
          </Link>
          </div>
          <Link to={`/content/${type}/${currentItem.id}`} >
          <div className="resume">
          <div className=" buttonB">▶</div>
         </div>
          </Link>
          </div>


          <div>
          <div className="mylist">
          {(!this.state.showModal) ? 
            <button href="/home"className="buttonADD" 
            onClick={()=>this.setState({showModal:true})}>
            ADD {type.toUpperCase()}</button> : <div></div>}

           <ReactModal 
            className="animated zoomIn modalAdd"
           style={{ overlay : {
                    position          : 'absolute',
                    backgroundColor   : 'rgba(0,0,0,.4)'
                  }}}
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example" >
           <div className="closeIcon" onClick={() => this.setState({showModal:false,searchTerm:"",searchResults:[]})}>X</div>
           <input  placeholder={`Type-in a ${type.toUpperCase()}`} 
                            autoFocus="autofocus"
                            className="typeInput" 
                            value={searchTerm} 
                            onChange={this.fillSearch}/>


           {searchResults.filter(item => item.first_air_date!="").filter(item => !this.isAlready(item.id)).sort((a,b) => {(a.popularity>b.popularity)?1 : -1}).slice(0,6).map(item =>
            <Link to={`/title/${type}/${item.id}`} key={item.id}>
            <div className="blobS" >
                <img   src={image+item.poster_path}/>
                <h1 className="titleText">{(item.original_name || item.original_title ).toUpperCase()}
                <a style={{marginLeft:'12px'}}className="yearText">{((item.first_air_date || item.release_date).substr(0,4).toUpperCase()) || ""}</a></h1>
              
                </div>
                </Link>
            )}
           </ReactModal>    
          <Header >
          
          </Header>



          {(type=="movie") 
           ? (<Mega getDetails={item => this.changeItem(item)}  base='movie' title={'Movie List'} toptv={myStuff} />)
           : (<Mega  getDetails={item => this.changeItem(item)} base='tv' title={'TV List'} toptv={myStuff} />)}
          
          </div>

         
                      </div>
                      </div>

    )
  }
}
export default Content;