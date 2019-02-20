import React from 'react';
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

import App from '../imports/ui/App.js' // meteor convention for where app is stored.

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target')) // renders app in dom element
} )