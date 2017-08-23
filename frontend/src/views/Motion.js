import React from 'react'



const Motion = ({state,type,onFiles,onClick,addClick}) => {



	return(
		<div>
			
            
            {
            	(!state.isAlready)
            	?
            	(<button onClick={() => addClick()} href="#"className="buttonW">ADD TO MY LIST</button>) 
            	:
            	<div></div>
            }

         </div>
		)
}

export default Motion