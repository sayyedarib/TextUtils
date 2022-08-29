import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const handleColor = () => {
    if (document.body.style.backgroundColor !== "rgb(60, 0, 149)") {
      document.body.style.backgroundColor = "rgb(60, 0, 149)";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtils-Dark";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode enabled", "success");
      document.title = "TextUtils-Light";
    }
  };

  return (
    <>
      <Router>

        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          handleColor={handleColor}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>

            {/* <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} /> */}
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />}>
            </Route>
          </Routes>
        </div>

      </Router>
      {/* <About/> */}
    </>
  );
}

export default App;
