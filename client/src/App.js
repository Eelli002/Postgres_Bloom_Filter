import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  const On_Submit_Form = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await fetch(`http://localhost:3002/users/?name=${name}`);
      const parse_response = await response.json();
      setUsers(parse_response);
    } 
    catch (error) {
      console.error(error.message)
    }
  }

  return (
    <>
      <div className='container text-center'>
        <h1 className='my-5'>User List</h1>
        <form className='d-flex' onSubmit={On_Submit_Form}>
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
        <table className='table my-3'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            { 
              users.map(user => (
                  <tr key={user.id}>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                  </tr>
              ))
            }
          </tbody>
        </table>
        {!users.length && <p>No Results Found</p>}
      </div>
    </>
  );
}

export default App;
