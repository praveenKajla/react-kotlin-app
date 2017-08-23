import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom';
import axios from 'axios';


const PATH = 'https://api.themoviedb.org/3/';
const PATH_SEARCH= 'search/';
const apiKey = 'api_key=bb396bfbcd6dc75c8a08f9e26857a1aa';
const PATH_QUERY = '&query=';
const image = "http://image.tmdb.org/t/p/original"



class SearchBar extends Component{
   constructor(props){
    super(props);
    this.state = {
     searchTerm:"",
     searchResults:[],
     searchBool:false,
    };
    this.fillSearch = this.fillSearch.bind(this);
    this.SearchInput = this.SearchInput.bind(this);

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
    const {myStuff} = this.props;

    const lookup = myStuff.map(stuff => stuff.id)
    const aa = lookup.includes(item.toString())
    return aa
  }



render(){

 const {searchTerm,searchResults,searchBool} = this.state;

  return(
      <div className="searchBar">
              <input 
                placeholder="SEARCH" 
                value={searchTerm}
                className="inputBar" 
                onChange={this.fillSearch}/>
                {(searchBool) ? 
                  (<div className="resultTable">
                     {searchResults.filter(item => !this.isAlready(item.id)).
                      sort((a,b) => b.vote_average - a.vote_average).slice(0,4).map((item,index) => 
                          <div style={{top:`${index*52}px`}}className="resultRow" key={item.id}>
                           <img className="resultThumbnail" src={image+item.poster_path}/>

                           <Link to={`/title/${this.props.type}/${item.id}`}
                                 className="searchTitle">
                                 {item.title||item.original_name}
                           </Link>

                           <a className="searchYear">{item.release_date||item.first_air_date}</a>
                           <a className="searchRate">&#9733; {item.vote_average}</a>
                           </div>)}
                      </div>) : 
                      (<div></div>)}
          </div>


    )
}
}
export default SearchBar












 