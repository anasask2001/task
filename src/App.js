import { useState } from 'react';
import './App.css';

import axios from 'axios';

function App() {
  const [result, setResult] = useState({
    Name: "",
    Email: "",
    Phonenumber: ""
  });

  const submittingdatas =  (e) => {
    e.preventDefault();
    try {
      const response = axios.post(`http://localhost:3003/api/users/adddata`,result );
      console.log(response.data); 
      return response.data
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <div>
      <form onSubmit={submittingdatas}>
        <input type='text' placeholder='Enter name' onChange={(e) => setResult({ ...result, Name: e.target.value })} />
        <input type='email' placeholder='Email' onChange={(e) => setResult({ ...result, Email: e.target.value })} />
        <input type="number"  placeholder='Enter your number' onChange={(e) => setResult({ ...result, Phonenumber: e.target.value })} />
        

        <button type='submit'>ADD DETAILS</button>
      </form>
    </div>
  );
}

export default App;
