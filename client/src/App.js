import * as React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import HorizontalLinearStepper from './components/HorizontalLinearStepper'
import {addMetric} from './components/HorizontalLinearStepper'
import Home from './components/Home'
import Finish from './components/Finish'
import SeeYou from './components/SeeYou'
import Results from './components/Results'

const tech = async () => {
  try {
    await addMetric("visits")
  } catch (e) {
    console.log('There has been a problem: ' + e.message)
    return
  }
}

export default function App() {
  React.useEffect(() => {
    tech();
  }, []);
  
  return (
    <BrowserRouter>
      <CssBaseline />
      <Container maxWidth="sm">
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/finish">
            <Finish />
          </Route>
          <Route path="/seeyou">
            <SeeYou />
          </Route>
          <Route path="/survey">
            <HorizontalLinearStepper style={{ height: '100vh' }} />
          </Route>
          <Route path="/results">
            <Results style={{ height: '100vh' }} />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  )
}