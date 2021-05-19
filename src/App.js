import React, {useEffect,useState} from 'react';
import './App.css';
import axios from 'axios'

function App() {
  useEffect(()=>{
    axios.get("https://www.dropbox.com/s/r5fxk83ldg7q5zk/company_list.json")
         .then((res) =>{
           console.log(res)
         })
         .catch((err) => console.log('something went wrong'))
  }, [])
  return (
    <div className="App">
    <h1>hello</h1>
    </div>
  );
}

export default App;
