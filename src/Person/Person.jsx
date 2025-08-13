import React from 'react'

const Person =(props) =>{
      return (
       <div><p onClick={props.click}>I'm a {props.name}  and I am {Math.floor(Math.random()*30)}years old!</p>
             <p>{props.children}</p>
             <input type="text"  onChange={props.changed}/>
       </div>     
      
      )
}

export default Person;




