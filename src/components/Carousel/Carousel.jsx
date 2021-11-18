import React, { useState } from "react";
import Carousel from "react-simply-carousel";
import './Carousel.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Youtube from 'react-youtube';

//Modal Imports
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const carouselOpts={
  height:"490",
  width:"100%",
  playerVars:{
  autoplay:1,
  },
};


function Slider() {
  const[movieOn,setMovieOn]=useState(0);
  const [activeSlide, setActiveSlide] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  function someFunc1() {
    handleOpen();
    setMovieOn(0);
  }
  function someFunc2() {
    handleOpen();
    setMovieOn(1);
  }
  function someFunc3() {
    handleOpen();
    setMovieOn(2);
  }
  return (
    
    <div className='carousel'>
      <Carousel
        updateOnItemClick
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between"
          }
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
           
            
          }
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            borderColor:"red",
            display:"none",
            alignSelf: "center"
          }
        }}
        backwardBtnProps={{
          children: <ArrowBackIosIcon style={{width:"50px",height:"50px",textAlign:"center",margin:"auto"}}/>,
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
            backgroundColor:"transparent",
            border:"none",
            color:"black"
          }
        }}
        itemsToShow={2}
        speed={400}
      >
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            style={{
                marginRight:20

            }}
            className='carouseloutline'
            key={index}
          >
               
            {index ==0 &&
              <img onClick= {someFunc1} className='carousel__image' src="https://www.canatasever.com/wp-content/uploads/2020/12/the-purge-1.jpg" />   
            }

            {index ==1 &&
               <img onClick={someFunc2} className='carousel__image' src="http://1.bp.blogspot.com/-xgySq1RGgBs/VOs0dd4yCyI/AAAAAAAAA9Y/YXoDrzjSC0Y/s1600/purge_anarchy.jpg" />
            }

            {index ==2 &&
              <img onClick={someFunc3} className='carousel__image' src="https://i.ytimg.com/vi/2rN6CgiZmPA/maxresdefault.jpg"/>
            }
                      
          </div>
        ))}
      </Carousel>
     
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

            <Box className='box' >
              <Typography id="transition-modal-title" variant="h6" component="h2">
                  
              </Typography>
                  
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                
                {(movieOn==0) &&  <Youtube videoId="K0LLaybEuzA"  opts={carouselOpts} /> }
                {(movieOn==1) &&  <Youtube videoId="XzFCDqKE4yA"  opts={carouselOpts} /> }
                {(movieOn==2) &&  <Youtube videoId="RXMp9fBomJw"  opts={carouselOpts} /> }

              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

export default Slider
