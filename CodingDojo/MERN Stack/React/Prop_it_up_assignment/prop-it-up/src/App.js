import React, { Component } from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

class App extends Component{
  constructor(props){
    super(props);

    this.state ={
      
    }
  }
  
  render(){
    return(
      <div>
        <PersonCard
          firstName = "Jane"
          lastName ="Doe"
          age = {45}
          hairColor = "Black"
        />
        <PersonCard
          firstName = "Jon"
          lastName ="Smith"
          age = {88}
          hairColor = "Brown"
        />
        <PersonCard
          firstName = "Fillmore"
          lastName ="Millard"
          age = {50}
          hairColor = "Brown"
        />
        <PersonCard
          firstName = "Maria"
          lastName ="Smith"
          age = {62}
          hairColor = "Brown"
        />

      </div>
    );
  }
}

export default App;