import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/homepage/homepage';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Issues from './components/issues/issues';
import Voting from './components/voting/voting';
import Endorsements from './components/endorsements/endorsements';

export default (
  <Switch>
    <Route exact path='/' component={Homepage} />
    <Route path='/issues' component={Issues} />
    <Route path='/votinginformation' component={Voting} />
    <Route path='/contact' component={Contact} />
    <Route path='/about' component={About} />
    <Route path='/endorsements' component={Endorsements} />
  </Switch>
);
