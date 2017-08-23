import React,{Component} from 'react';
import axios from 'axios';
import Titles from './Titles';
import Header from './Header'
const PATH = 'https://api.themoviedb.org/3/';
const MOVIE_GENRE = 'genre/movie/list?'
const TV_GENRE = 'genre/tv/list?'
const apiKey = 'api_key=bb396bfbcd6dc75c8a08f9e26857a1aa';

class Renegade extends Component {
  constructor(props){
    super(props);
    this.state = {
      topTV:[],
    };

  }
  componentDidMount(){
    axios.get(`${PATH}genre/${this.props.match.params.id}/movies?${apiKey}`)
         .then(response => {console.log(response.data.results);this.setState({topTV:response.data.results});});
  }
  
  render(){
    const {type,name,id} = this.props.match.params;
           return(
                <div>
                <Titles base='movie' title={name} toptv={this.state.topTV}/>   
                </div>       
          );

  }
}
export default Renegade;