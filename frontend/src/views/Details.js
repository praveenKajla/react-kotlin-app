import React from 'react'
import CalendarIcon from 'grommet/components/icons/base/Calendar';
import ClockIcon from 'grommet/components/icons/base/Clock';
import StarIcon from 'grommet/components/icons/base/Star';
import Paragraph from 'grommet/components/Paragraph';



 const Details = ({details}) => {
  var year;
    var runtime;
    var overview;
    if(details.overview!==undefined){
       overview =details.overview.substr(0,300)
    }
    if(details.release_date!==undefined){
       year =details.release_date.substr(0,4)
    }
    else if(details.first_air_date!==undefined){
       year =details.first_air_date.substr(0,4)
    }


    if(details.runtime!==undefined){
       runtime = Math.floor(details.runtime/60).toString()+'h '+(details.runtime%60).toString() + 'm';
      
    }
    else if(details.episode_run_time!==undefined){
       runtime = details.episode_run_time[0].toString()+"m"

    }

        return( <div>
                <h2 style={{fontFamily: 'Open Sans',letterSpacing:'2px',fontWeight:100,margin:'20px 140px',color:'#f7f7f7'}}>{details.title || details.original_name }</h2>
                <h2 style={{fontFamily:'Open Sans',fontWeight:'100',marginLeft:'150px',fontSize:'1em',color:'#f7f7f7'}}><StarIcon colorIndex="light-1" size="xsmall"/> {`${details.vote_average} (${details.vote_count})`}</h2>
                
                <h2 style={{fontFamily:'Open Sans',float:'left',fontWeight:'100',margin:'-2.9em 0 0 250px',fontSize:'1em',color:'#f7f7f7'}}><CalendarIcon colorIndex="light-1" size="xsmall"/> {year}</h2>
                <h2 style={{float:'left',fontWeight:'100',margin:'-2.7em 0 0 330px',fontSize:'1em',color:'#f7f7f7'}}><ClockIcon colorIndex="light-1" size="xsmall"/> {runtime}</h2>
                <Paragraph style={{fontFamily:'Open Sans',opacity:'0.88',color:'#f7f7f7',marginLeft:'120px',marginRight:'30px',fontSize:'0.8rem'}}>{overview}</Paragraph>
                </div>
                );
}

export default Details