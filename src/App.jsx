import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Person from './Person/Person'


function Home({ message }) {
  return <h1>{message}</h1>;
}

function About() {
  return <h1>About Burger App</h1>;
}

class App extends component{
   state = {
    Persons : [
         {name : 'joe ' , age : '55'},
         {name : 'jane ', age : '2'},
         {name : 'max ', age : '18'}
    ]
   }
switchNameHandler =  () => {
     console.log('button was clicked ');
     
}

  render(){
  return (
    <><Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home message="Welcome to Burger App!" />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    <Person name = {this.state.Persons[0].name}  age = '25'></Person>
    <button onClick={this.switchNameHandler}>switch</button>
    <Person name = 'jane'  age = '30'><p>i no get work</p></Person>
    <Person name = 'john'  age = '35'></Person>
   </>
    
  );
  }
  
}

export default App ;
