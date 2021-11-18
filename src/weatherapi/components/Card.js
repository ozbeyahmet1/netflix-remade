import React from 'react';


export const getEmojiClassName = (weather) => {
    const weatherLC = weather.toLowerCase();
  if (weatherLC === 'clouds') {
    return 'clouds' ;
  } else if (weatherLC === 'rain'  || weatherLC==='extreme' || weatherLC==='drizzle'|| weatherLC==='shower rain') {
    return 'rain';
  }
    else if (weatherLC === 'snow') {
      return 'snow';
  } 
    else if (weatherLC === 'thunderstorm' ) {
    return 'thunderstorm';
  } 
    else if ( weatherLC === 'clear' ) {
    return 'clear' ;
    
  } 
  
   
   


};
