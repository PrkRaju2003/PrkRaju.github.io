import './App.css';
import profilepic from './img/profilepic.jpg';
import React from 'react';
import Typewriter from 'typewriter-effect';
import Quote from './img/Breathe.jpg';


function App() {
  return (
    <div className="App reveal ">
      <header className="App-header">
        
        <p><style>
@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap');
</style>
          Hello there,
        </p>
        <div className="about">
          <p><style>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
</style>
           
      
<Typewriter 
  options={{
    strings: ["I'm Pusapati Ramakrishna Raju, currently pursuing UG in Amrita School of Engineering - Bengaluru."],
    autoStart: true,
    loop: true,
    delay: 35,
    deleteSpeed: 30000000,
  }}
/>
<Typewriter 
  options={{
    strings: ["Being a student in the field of Computer Science, I tend to learn the branch much deep."],
    autoStart: true,
    loop: true,
    delay: 35,
    deleteSpeed: 30000000,
  }}
/>
<Typewriter 
  options={{
    strings: ["Currently Looking for Internship Opportunities and learning more on the way."],
    autoStart: true,
    loop:true,
    delay: 35,
    deleteSpeed: 30000000,
  }}
/>
<Typewriter 
  options={{
    strings: ["I enjoy playing both sports and video games."],
    autoStart: true,
    loop: true,
    delay: 35,
    deleteSpeed: 30000000,
  }}
/>
</p>

        </div>
        <div className='row'>
          <div className='column'>
        <img className='quote'  src={Quote} alt="Quote" align="right"></img>
        </div>
        <div className='column'></div>
        <div className="profile-pic column" id="profile-pic">
        <img src={profilepic} alt="Profile Pic" align="left"></img>
        </div>
        </div>      
      </header>
    </div>
  );
}

export default App;
