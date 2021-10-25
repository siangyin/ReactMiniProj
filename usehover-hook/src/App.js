import React from "react";
import "./styles.css";
import AllStyles from './AllStyles'
import StandardCss from './StandardCss'
import InlineStyle from './InlineStyles'
import InlineStylesWithHooks from './InlineStylesWithHooks'
import SCSS from './SCSS'
import Module from './Modules'
import StyledComponents from './StyledComponents'
import Navigation from './Navigation'
import {Route, Switch} from 'react-router-dom'


export default function App() {

  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path='/' component={AllStyles} />
        <Route path='/standard' component={StandardCss} />
        <Route path='/inline' render={ () => <InlineStyle  primary={false}/>} />
        <Route path='/inline-with-hooks' render={ () => <InlineStylesWithHooks  primary={false}/>} />
        <Route path='/scss' component={SCSS} />
        <Route path='/module' component={Module} />
        <Route path='/styled-components' render={() => <StyledComponents primary={true}/> } />
      </Switch>
    </>
  );
}
