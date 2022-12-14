import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

function App() {
  let navigate = useNavigate();

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
        <Button variant="" onClick={() => navigate("/cats")}>
          Cats
        </Button>
      </div>
    </div>
  );
}

export default App;
