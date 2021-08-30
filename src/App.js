import React from 'react';
import Main from './components/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="content-wrapper-flex">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
