import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import HorizontalLinearStepper from './components/HorizontalLinearStepper'
import Home from './components/Home'
import Finish from './components/Finish'
import SeeYou from './components/SeeYou'


export default function App() {
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
        </Switch>
      </Container>
    </BrowserRouter>
  )
}