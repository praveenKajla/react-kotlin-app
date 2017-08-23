


import React,{Component} from 'react';
import './css/loader.css';




class Circles extends Component{

   constructor(props){
    super(props);
    this.state = {
      progress:100,
    }
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps.progress)
    this.setState({progress:(100-nextProps.progress)})
  }

  render() {

    return (
      <div className="topp">
      <div className='loader'>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      
    </div>
    </div>
      )
  }
}

export default Circles;