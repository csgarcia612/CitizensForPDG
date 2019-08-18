import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/homepage/homepage';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Issues from './components/issues/issues';
import CommunityInvolvement from './components/communityInvolvement/communityInvolvement';
import Voting from './components/voting/voting';

export default (
  <Switch>
    <Route exact path='/' component={Homepage} />
    <Route exact path='/issues' component={Issues} />
    <Route path='/communityinvolvement' component={CommunityInvolvement} />
    <Route path='/votinginformation' component={Voting} />
    <Route path='/contact' component={Contact} />
    <Route path='/about' component={About} />
  </Switch>
);
