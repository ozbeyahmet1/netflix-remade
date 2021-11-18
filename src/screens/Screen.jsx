import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Movielist from '../components/Movielist/Movielist';
import requests from '../api/Request';
import ContinueWatching from '../components/ContinueWatching/ContinueWatching';
// import OpenIconSpeedDial from '../components/SpeedDial'


import './Screen.css';



function Screen() {
  return (
    <div className="monitor">

        <Navbar/>
      

        <Banner/>

        <Movielist
     
          title='Trending'
          fetchUrl={requests.fetchTrending}
          isLargeRow
          
        />
        
        <Movielist
          className='movielist__categories'
          title='Comedy Movies'
          fetchUrl={requests.fetchComedyMovies}
          
        />
        <ContinueWatching />
      
        <Movielist
        className='movielist__categories'
          title='Horror Movies'
          fetchUrl={requests.fetchHorrorMovies}
          
        />

        <Movielist
          className='movielist__categories'
          title='Documentaries'
          fetchUrl={requests.fetchDocumentaries}
          
        />

        <Movielist
          className='movielist__categories'
          title='Action Movies'
          fetchUrl={requests.fetchActionMovies}
          
        />
         <Movielist
          className='movielist__categories'
          title='Crime Movies'
          fetchUrl={requests.fetchCrimeMovies}
          
        />
            <Movielist
          className='movielist__categories'
          title='Family Movies'
          fetchUrl={requests.fetchFamilyMovies}
          
        />

      

        <Movielist
        className='movielist__categories'
          title='Romance Movies'
          fetchUrl={requests.fetchRomanceMovies}
          
        />
        
        <Movielist
        className='movielist__categories'
          title='Netflix Originals'
          fetchUrl={requests.fetchNetflixOriginals}
          
        />




       {/* <OpenIconSpeedDial/> */}

  
   
      
    </div>
  );
}

export default Screen;
