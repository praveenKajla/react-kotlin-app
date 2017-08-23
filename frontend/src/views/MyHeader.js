import React from 'react'
import {Link,Route} from 'react-router-dom';


const MyHeader = ({onClick,type}) => {


	return(
		<div>
			<Link to="/">
            <button  style={{marginLeft:'50px',
                backgroundColor:'transparent'}}
                className="buttonX">Home</button>
            </Link>

            <button onClick={() => onClick("movie")}  
                   style={{marginLeft:'150px',backgroundColor:(type=="movie")?'#c61121' : 'transparent'}}
                   className="buttonX">
                   MOVIES
            </button>

            <button onClick={() => onClick("tv")} 
                    style={{marginLeft:'280px',backgroundColor:(type=="tv")?'#c61121' : 'transparent'}}
                    className="buttonX">
                    TV SHOWS
            </button>
        </div>

		)
}

export default MyHeader