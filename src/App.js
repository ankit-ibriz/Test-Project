import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Testing react app CI/CD and its deployment in AWS S3, Cloudfront, Route53 V2</h1>
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
