import React ,{useState,useEffect} from 'react'
import axios from "../../api/axios";
import './Movielist.css'
import icon from '../../images/icon.png'
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const base_url = "https://image.tmdb.org/t/p/original/"

/* 
    const style = {
    
        position: 'absolute',
        top: '50%',
        bottom:'50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height:'50vh',
      }; */
    




  
function Movielist({title,fetchUrl,className,isLargeRow = false}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");

    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    },[fetchUrl])

    const [movieOn,setMovieOn]=useState(false)
 
    const opts={
        height:"490",
        width:"100%",
        playerVars:{
        autoplay:1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
           
        } else{
            movieTrailer(movie?.title ||  movie?.name || movie?.original_name || movie?.original_title || "")
            .then((url) => {
               const urlParams =new URLSearchParams(new URL(url).search) ;
              setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
            console.log("trailerUrl")

            
        }
    };

    return (
        <div >
            <div className={`movielist ${className}`} >
                <div style={{display:'flex',marginLeft:'20px'}}>
              <div>
                  <img src={icon} alt="" />
              </div>
              <h2 style={{color:'white',marginLeft:'10px'}}>{title}</h2>
               </div>
           <div className="movielist__posters" onClick={handleOpen} >
    
            {movies.map(movie => (
                <>
                <img
                    
                    onClick={() => handleClick(movie)}
                    className={`movielist__poster ${isLargeRow && "row__posterLarge"}`}
                    key={movie.id}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} /></>
               
                   
            ))}

          
           
            
                </div>
               
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
                              {trailerUrl && ( <Youtube videoId={trailerUrl} opts={opts} />) }   
                            </Typography>
                        </Box>
                        </Fade>
                    </Modal>
                    </div>
               
          

            </div>

            {/* <div>
                {movieOn? (
                    <Movie/>
                ) : (
                    <>

                    <h2>AHMASDASDET</h2>

                   </>
                )}
            </div> */}

        </div>
     
    )
}

export default Movielist
