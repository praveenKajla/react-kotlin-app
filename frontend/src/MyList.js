
import React,{Component} from 'react';
import Content from './Content'
import MyHeader from './views/MyHeader'
import './css/mylist.css'
import LinkPreviousIcon from 'grommet/components/icons/base/LinkPrevious';
import './css/main.css'


const image = "http://image.tmdb.org/t/p/original"
class MyList extends Component {

  constructor(props){
    super(props);
    this.state = {
      type:"movie",
      bgurl:"",
    }
    this.changeType = this.changeType.bind(this);
  }
  changeType(type){
    this.setState({type:type})
  }
  getBackground(url){
    this.setState({bgurl:url})
  }
 

  
  render(){
          const {type,bgurl} = this.state;
           return(
            <div >
             <div style={{backgroundSize:'cover',backgroundImage:`url("${image+bgurl}")`}} className="vignetteML">   
          <button className="backButton" onClick={this.props.history.goBack}><LinkPreviousIcon/></button> 
              
            <MyHeader onClick={type => this.changeType(type)} type={type}/>
                
            {(this.state.type=="movie") ?
            (<Content getBackground={url => this.getBackground(url)}type="movie"/>) :
              (<Content getBackground={url => this.getBackground(url)} type="tv"/>)}
              
              
              </div>
              
              </div>
          );

  }
}

export default MyList;