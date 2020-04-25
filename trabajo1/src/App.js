import React, { Component } from 'react';

import Header from './menu/Header';
import Body from './menu/Body';
// import Footer from './Footer';

class App extends Component{
  render() {
    return (
      <div>
        <Header />
        <Body />
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App;
