//Selection.js

import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate-poooooooop', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry-poooop' },
  { value: 'vanilla', label: 'Vanilla' }
]

const Selection = () => (
  <Select options={options} />
)

export default Selection;
