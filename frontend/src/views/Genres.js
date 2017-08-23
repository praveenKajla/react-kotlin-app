import React from 'react'
import {Link,Route} from 'react-router-dom';


const Genres = ({genres,type}) => {

	return(
		    <div style={{marginLeft:'120px'}}>
                {genres.map(item => 
                    <Link  to={`/a/${type}/${item.name}/${item.id}`}  key={item.id}>
                    <button href="/home"className="buttonG">{item.name}</button>
                    </Link>
                )}
             </div>
		)
}

export default Genres