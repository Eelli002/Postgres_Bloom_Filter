import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");

  const On_Submit_Form = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await fetch(`http://localhost:3002/users/?name=${name}`)
    } 
    catch (error) {
      console.error(error.message)
    }
  }

  return (
    <>
      <div className='container text-center'>
        <h1 className='my-5'>User List</h1>
        <form className='d-flex'>
          <input 
            type='text' 
            name='name' 
            placeholder='Find User' 
            className='form-control' 
            value={name} 
            onChange={e => setName(e.target.value)}
          />
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
