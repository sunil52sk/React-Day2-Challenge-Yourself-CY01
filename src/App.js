import './App.css'
import React, { Component } from 'react'

export class Car extends Component {
  sty={
    width:"400px",
    hight:"400px"
  }
  render() {
    return (
      <div>
        <img style={this.sty} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCoigjfHttqlyz0SOeL_tT_Rg09FP-jqaQW4EPqIa&s' alt=''/>
          <p>Koeingsegg Agera R</p>
      </div>
    )
  }
}

function Location() {
  return (
    <div>
    Ängelholm, Sweden</div>
  )
}

function App() {
  return (
    <div><Car/>
    <Location/>
    </div>
  )
}

export default App

