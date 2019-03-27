import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PhotoList from './Photos'
import Photo from './Photos/Photo'
import App from './App.js'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/photos" component={PhotoList} />
      <Route path="/photos/:id" component={Photo} />
      <Route exact path="/" component={App} />
    </Switch>
  </Router>
)

export default Root