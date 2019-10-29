import React from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <div className="main">
          <Contacts />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
