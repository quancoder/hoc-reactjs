import React from 'react';

import TopMenu from './component/TopMenu';
import Header from './component/Header';
import Content from './component/Content';
import Footer from './component/Footer';

function App() {
  return (
    <div className="container App">
      <TopMenu />
      <Header />
      <div className="row">
        <Content tieude="Day la tieu de 1"/>
        <Content tieude="Day la tieu de 2" />
        <Content tieude="Day la tieu de 3" />
        <Content tieude="Day la tieu de 4" />
        <Content tieude="Day la tieu de 5" />
        <Content tieude="Day la tieu de 6" />
        <Content tieude="Day la tieu de 7" />
        <Content tieude="Day la tieu de 8" />
        <Content tieude="Day la tieu de 9" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
