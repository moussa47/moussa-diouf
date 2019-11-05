import React,{Component} from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Navbar from './components/navbar/navar'
import TourList from './components/toursList/tourList';

class App extends Component {


  render(){
   
    
return(
  <>
  
  
  <Navbar />
  <TourList />
    
   
   
  </>
)
}
}

export default App;
