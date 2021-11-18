import React ,{useEffect, useState} from 'react'
import './Banner.css'
import Slider from '../Carousel/Carousel';
import backgroundEffect from '../../images/backgroundEffect.png';
import Youtube from 'react-youtube';
import { FaPlay } from 'react-icons/fa';

// Modal Imports
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';




const bannerMovieOpts={
    height:800,
    width:"100%",
    playerVars:{
    autoplay:1,
    },
  };

function Banner(props) {
   
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (    
        <div className='banner' >
                <div>      
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}   
                    >
                        <Fade in={open}>

                        <Box className='banner__modal'>
                            <Typography id="transition-modal-description" >
                                <Youtube videoId="xOrXpK-rUaI"  opts={bannerMovieOpts}  />                        
                            </Typography>
                        </Box>

                        </Fade>

                    </Modal>
                </div>
     
                <div>               
                
                    <div >
                        <FaPlay onClick={handleOpen} className='PlayCircleFilledIcon'/>
                    </div>
                    
                    <div className='banner__background'/>
    
                    <div className="banner__foreground"/>
            
                    <div className="banner__info">                   
    
                        <img className='banner__movieName' src="https://fanart.tv/fanart/movies/602223/hdmovielogo/the-forever-purge-60d5135167043.png"/>
                            
                    
                        <div className='banner__buttonBlock'>
                            <button className='button-49' onClick={handleOpen}><h3>PLAY<FaPlay style={{marginLeft:'5px',textAlign:'center'}}/></h3> </button>  
                        </div>
    
                      
                    
                    </div>
                    
                    <Slider />
                    <img src={backgroundEffect}  className="banner__effect" alt=""/>
                </div>
                    
                

            

         
     
            
       
    
        </div>
        
    )
}

export default Banner
