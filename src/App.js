import React,{Component} from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vetements from './components/vetement';
import Sacs from './components/sacs';
import Chaussures from './components/chaussures';
import Dashboard from './components/dashbord';
import Footer from './components/footer';
import Modal from './components/modal';
import ModalShoe from './components/dumbComponents/modalShoe';

import Sidebar from './components/nav/nav2'
import ModalVet from './components/dumbComponents/modalVet';
// import Detail from '../src/components/detail'
class App extends Component {


  render(){
   
    
      return(
          <BrowserRouter>
                {/* <Navbar /> */}
                {/* <SideNav /> */}
               <Sidebar/>
                <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/vetements' component={Vetements}/>
                <Route exact path='/sacs' component={Sacs}/>
                <Route exact path='/chaussures' component={Chaussures}/>
                <Route exact path='/modalshoe' component={ModalShoe}/>
                <Route exact path='/modalvet' component={ModalVet}/>
               
                </Switch>
                <Modal />
                <Footer/>
               
          </BrowserRouter>
         )
      }
}

export default App;
