
import 'grommet/scss/vanilla/index.scss';
import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom';
import Logo from './Logo'
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
class Header extends Component{


        render(){
            return(
			<Box pad='medium' direction='row'>
			<Link to="/"><Logo/></Link>
            <Link to="/"style={{textDecoration:'none'}}> 
                <Button style={{color:'#92908e'}} plain={true}label='Home'href='#'   />
            </Link>
            <Link to="/genre/movies">
                <Button style={{color:'#92908e'}} plain={true}label='Browse'href='#'   />
            </Link>
         
            <Link to="/praveen/list"style={{textDecoration:'none'}}>
                <Button style={{color:'#92908e'}}label='My List'href='#' plain={true}primary={false}  secondary={false} />
            </Link>
        
        </Box>		
        );
        }
        		
    }

export default Header;