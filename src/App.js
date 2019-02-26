import React, { Component } from 'react';
import Footer from './components/footer'
import Navbar from './components/header'
import Form from './components/form'
import Homepage from './components/homepage'
import {Route} from 'react-router-dom'
import './App.css';

class App extends Component {
  btnClick = () => {
    alert('Masuk')
  }


  render() {
    return (
      <div>
        <Navbar/>
        <div className='container'>
          <Route path='/form' component={Form} />
          <Route path='/' component={Homepage} exact />
        </div>
        <Footer/>
      </div>
      
    );
  }
}

export default App;
