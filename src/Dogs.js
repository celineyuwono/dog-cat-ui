import "./App.css";
import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

function App() {
  const [dog, setDog] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    callDog();
  }, []);

  function callDog() {
    axios({
      method: "get",
      url: "http://localhost:6069/dogs",
    }).then((response) => {
      setDog(response.data);
    });
  }

  return (
    <div className="App" style={{ marginTop: "100px" }}>
      <div className="App" style={{ marginTop: "100px" }}>
        <Typography onClick={() => navigate("/")} component="h1">
          Slalom Dogs and Cats
        </Typography>
        <br />
        <Button
          variant=""
          onClick={() => {
            callDog();
          }}
        >
          Dogs
        </Button>
        <Button variant="" onClick={() => navigate("/cats")}>
          Cats
        </Button>
      </div>
      {dog && <img alt="dog" src={dog} />}
    </div>
  );
}

export default App;
