import React ,{useEffect,useState} from 'react';
import Screen from './Screen';
import './App.css';
import Login from '../components/Login/GetStarted';
import Profile from '../components/Profile/Profile'
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";
import { auth } from '../firebase';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout,selectUser } from '../features/userSlice';
import Weather from '../weatherapi/App';


function App() {
  const user=useSelector(selectUser);
  const dispatch = useDispatch();
 
 const [logged,setLogged]=useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
         
        }))
        setLogged(true); 
      }else{
        dispatch(logout());
      }
    });
  
    return unsubscribe; }, [dispatch]);

  
  return (
    <div className="App">

      <Router>
        {!user ? (
        
          <Login/> 
          
        ): (
        
          <Switch >
             <Route path="/welcome">           
              <Weather/>  
            </Route>
          
             
            
             <Route path="/profile">           
              <Profile/>  
            </Route>
          
           
            <Route exact path="/">           
              <Screen/>  
            </Route>

            
           
          </Switch>
        )}
         
      </Router>


  
      
   
   
    </div>


  );
}

export default App;
