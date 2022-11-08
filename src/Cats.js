import "./App.css";
import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function App() {
  const [cat, setCat] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    callCat();
  }, []);

  function callCat() {
    axios({
      method: "get",
      url: "http://localhost:6069/cats",
    }).then((response) => {
      setCat(response.data);
    });
  }

  return (
    <div className="App" style={{ marginTop: "100px" }}>
      <div className="App" style={{ marginTop: "100px" }}>
        <Typography onClick={() => navigate("/")} component="h1">
          Slalom Dogs and Cats
        </Typography>
        <br />
        <Button variant="" onClick={() => navigate("/dogs")}>
          Dogs
        </Button>
        <Button
          variant=""
          onClick={() => {
            callCat();
          }}
        >
          Cats
        </Button>
      </div>
      {cat && <img alt="cat" src={cat} />}
    </div>
  );
}

export default App;
