/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

console.log('REACT READY')

import React from 'react'
import { render } from 'react-dom'
import SampleComponent from '../components/SampleComponent'
import hello from '../components/hello'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.body.appendChild(document.createElement('div'));
  render(<SampleComponent/>, container)
});

document.querySelector('.btn').addEventListener('onClick', () => {
  const hello = document.body.appendChild(document.createElement('div'));
  render
})