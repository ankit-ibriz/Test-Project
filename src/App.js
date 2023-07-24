import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function App() {
  const [userName, setUsername] = useState('')

  useEffect(() => {
    getNames();
  }, [])

  const getNames = async () => {
    const response = await axios.get('/names');
    console.log(response);
    setUsername(response.data);
  }

  return (
    <div>
      <h1>Testing react app CI/CD and its deployment in AWS S3, Cloudfront, Route53 V3</h1>
      {/* <h2>If my name displays then backend is working properly: {userName}</h2> */}
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/here">Click here</Link> |{" "}
        <Link to="/page">Next page</Link>
      </nav>
    </div>
  );
}

export default App;
