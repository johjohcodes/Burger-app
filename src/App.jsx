import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Person from './Person/Person'


function Home({ message }) {
  return <h1>{message}</h1>;
}

function About() {
  return <h1>About Burger App</h1>;
}

const App = props => {
  const [personsState, setPersonsState] = useState({
    Persons: [
      { name: 'joe', age: '55' },
      { name: 'jane', age: '2' },
      { name: 'max', age: '18' }
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = () => {
    setPersonsState({
      ...personsState,
      Persons: [
        { name: 'joseph', age: '55' },
        { name: 'jane', age: '2' },
        { name: 'max', age: '29' }
      ]
    });
  };

  const nameChangedHandler = (event) => {
    setPersonsState({
      ...personsState,
      Persons: [
        { name: 'max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'stephanie', age: 26 }
      ]
    });
  };

  return (
    <>
      <Router>
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
      <Person name={personsState.Persons[0].name} age={personsState.Persons[0].age} />
      <button onClick={switchNameHandler}>switch</button>
      <Person
        name={personsState.Persons[1].name}
        age={personsState.Persons[1].age}
        click={switchNameHandler}
        changed={nameChangedHandler}
      >
        <p>i no get work</p>
      </Person>
      <Person name={personsState.Persons[2].name} age={personsState.Persons[2].age} />
    </>
  );
};

export default App;
