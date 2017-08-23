import React,{Component} from 'react';
import axios from 'axios'
import Circles from './Circles'
import Details from './views/Details'
import Genres from './views/Genres'
import Motion from './views/Motion'
import SVGM from './SVGM'

const imageUrl ='http://image.tmdb.org/t/p/original/';

class  Overview extends Component{

  constructor(props){
    super(props);
    this.state = {
      details:[],
      isAlready:false,
      isLoading:true,
    }
    this.addList = this.addList.bind(this);
  }
  componentWillReceiveProps(nextProps){

    const{details,isAlready} = nextProps.state;
    if(details.length!=0){
      this.setState({isLoading:false,
                      details:details,
                      isAlready:isAlready})
    }    
    
  }

  
 
addList(item){
  const {type} = this.props;
  console.log("exec without perm")

  if(type=="movie"){
    item.video = {}
   axios.post('http://localhost:8090/api/movie/praveen',
              item).then(response => 
                          this.setState({isAlready:true}
                            )
              )
  }
  else{
   axios.post('http://localhost:8090/api/tv/praveen',
              item).then(this.setState({isAlready:true}))
    }
  this.props.goBack();
  }



  render(){

    const {type,match} = this.props;
    const {details,isAlready} = this.state;    
   
  return(   
        <div> 

        {
          (this.state.isLoading)
        ? <Circles/>
          
        : <div style={{backgroundImage:`url('${imageUrl+details.poster_path}')`}}className="videobgM" >
        
              
                 <div className="detailsLayer">
                  <SVGM/>
                  <Details details={details} />
                  <Genres genres={details.genres} type={type}/>

                  <Motion state={this.state}                           
                          addClick={() => this.addList(details)}
                          type={type}
                          />
               
                </div>
               
          </div>
      }
    </div>
  );
  }
}




export default Overview;