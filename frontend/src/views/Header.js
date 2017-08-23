
import React from 'react'


const Header = ({getOverview,getSimilar,cat}) => {


	return(
		<div className="headerNav">
		 <button onClick={() => getOverview()} 
                style={{marginLeft:'150px',
                backgroundColor:(cat=="overview")?'#c61121' : 'transparent'}}className="buttonX">OVERVIEW</button>
          
          <button onClick={() => getSimilar()} 
                  style={{marginLeft:'350px',
                  backgroundColor:(cat=="similar")?'#c61121' : 'transparent'}}
                  className="buttonX">SIMILAR</button>
          </div>
		)
}


export default Header