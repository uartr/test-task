import React from 'react';

import Header from './Header';
import Footer from './Footer';

const RenderPage = (Page, props) => {
  return (
    <div className="wrapper">
      <Header links={props.headerLinks}/>
      <Page />
      <Footer links={props.footerLinks}/>
    </div>
  );
}

export default RenderPage;