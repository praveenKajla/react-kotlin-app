import React from 'react'
import CalendarIcon from 'grommet/components/icons/base/Calendar';
import ClockIcon from 'grommet/components/icons/base/Clock';
import StarIcon from 'grommet/components/icons/base/Star';
import Paragraph from 'grommet/components/Paragraph';



 const Info = ({currentItem}) => {
  var year;
    var runtime;
    var overview;
    if(currentItem.overview!==undefined){
       overview =currentItem.overview.substr(0,300)
    }
    if(currentItem.release_date!==undefined){
       year =currentItem.release_date.substr(0,4)
    }
    else if(currentItem.first_air_date!==undefined){
       year =currentItem.first_air_date.substr(0,4)
    }


    if(currentItem.runtime!==undefined){
       runtime = Math.floor(currentItem.runtime/60).toString()+'h '+(currentItem.runtime%60).toString() + 'm';
      
    }
    else if(currentItem.episode_run_time!==undefined){
       runtime = currentItem.episode_run_time[0].toString()+"m"

    }

        return( <div>
               <h2 style={{fontFamily: 'Montserrat, sans-serif',letterSpacing:'2px',fontWeight:100,fontSize:'40px',margin:'0 0 22px',color:'#f7f7f7',textDecoration:'none'}}>{currentItem.original_name || currentItem.title}</h2>
          
          <h2 style={{fontFamily:'Open Sans',fontWeight:'100',fontSize:'1em',color:'hsla(0,0%,100%,.6)'}}><StarIcon colorIndex="light-1" size="xsmall"/>{`${currentItem.vote_average} (${currentItem.vote_count})`} </h2>
          <h2 style={{fontFamily:'Open Sans',float:'left',fontWeight:'100',margin:'-2.9em 0 0 130px',fontSize:'1em',color:'hsla(0,0%,100%,.6)'}}><CalendarIcon colorIndex="light-1" size="xsmall"/>{year}</h2>
          <h2 style={{float:'left',fontWeight:'100',margin:'-2.7em 0 0 220px',fontSize:'1em',color:'hsla(0,0%,100%,.6)'}}><ClockIcon colorIndex="light-1" size="xsmall"/> {runtime}</h2>
      <Paragraph style={{margin:'0',fontFamily:'Open Sans',opacity:'0.88',color:'hsla(0,0%,100%,.6)',fontSize:'16px',lineHeight:'25px',fontWeight:'400'}}>{overview}</Paragraph>
                </div>
                );
}

export default Info















