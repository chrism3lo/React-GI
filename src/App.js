import { Component } from 'react';  
import BasicInfo from './components/BasicInfo';


let people = [
  {
    name: 'Chris',
    phone: '1234567891',
    age: 22,
    favoriteFood: 'Tacos'
  },
  {
    name: 'Alex',
    phone: '7041234567',
    age: 23,
    favoriteFood: 'KBBQ'
  },
  {
    name: 'Dawn',
    phone: '1234567891',
    age: 40,
    favoriteFood: 'Chicken'
  },
  {
    name: 'John',
    phone: '1234567899',
    age: 40,
    favoriteFood: 'Steak'
  },
  {
    name: 'Sally',
    phone: '123456789',
    age: 60,
    favoriteFood: 'cake'
  }
]

function iteratePeople(arr) {
  return arr.map((person) => {
    return <BasicInfo person={person} />
  }
  )
}

export default class App extends Component {  
  // easy
  constructor(props){  
    super(props);  
    this.state = {
        person: {
        }
    }
  }  
  // very easy/ medium
    render() {
      return (iteratePeople(people))
  }
}


