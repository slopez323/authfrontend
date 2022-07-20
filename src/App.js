import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import { useState } from "react";

// const urlEndpoint = "http://localhost:4000";

function App() {
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <NavBar
              isAuthLoading={isAuthLoading}
              setIsAuthLoading={setIsAuthLoading}
            />
          }
        >
          <Route index element={<HomePage />} />
          <Route
            path="/login"
            element={
              <LoginPage
                isAuthLoading={isAuthLoading}
                setIsAuthLoading={setIsAuthLoading}
              />
            }
          />
          <Route
            path="/registration"
            element={
              <RegistrationPage
                isAuthLoading={isAuthLoading}
                setIsAuthLoading={setIsAuthLoading}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
