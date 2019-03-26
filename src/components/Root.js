import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PhotoList from './Photos'
import Photo from './Photos/Photo'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/photos" component={PhotoList} />
      <Route path="/photos/:id" component={Photo} />
    </Switch>
  </Router>
)

export default Root