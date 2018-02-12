import './scss/app.scss';

const dataheaderLinks = [
  { to: '/', text: 'How it works' },
  { to: '/calendar', text: 'Calendar' },
  { to: '/contacts', text: 'Contact us' },
  { to: '#', text: 'Portfolio' }
];

const datafooterLinks = [
  { to: '#', text: 'Terms' },
  { to: '#', text: 'Privacy' },
  { to: '#', text: 'Security' },
  { to: '#', text: 'Status' },
  { to: '#', text: 'Help' },
  { to: '#', text: 'Contact' }
];


import React from 'react';
import {HashRouter, BrowserRouter, Route, Switch} from 'react-router-dom';
import {render} from 'react-dom';

import RenderPage from './components/RenderPage.js';

import Home from './components/Home';
import Calendar from './components/Calendar';
import Contacts from './components/Contacts';



const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => (RenderPage(Home, props))}/>
        <Route path="/calendar" render={() => (RenderPage(Calendar, props))}/>
        <Route path="/contacts" render={() => (RenderPage(Contacts, props))}/>
      </Switch>
    </BrowserRouter>
  );
};

render(<App headerLinks={dataheaderLinks} footerLinks={datafooterLinks}/>, document.getElementById('app'));