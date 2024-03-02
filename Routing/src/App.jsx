import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import { DashBoard } from "./components/DashBoard";
//import Landing from "./components/Landing";
const Dash = React.lazy(() => import("./components/DashBoard"));
const Land = React.lazy(() => import("./components/Landing"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar></Appbar> <br />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback = {"Loading..."}> <Dash></Dash> </Suspense>} />
          <Route path="/" element={<Suspense fallback = {"Loading..."}> <Land></Land> </Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  );

  function Appbar() {
    const navigate = useNavigate();
    return (
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Landing Page
        </button>
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          DashBoard Page
        </button>
      </div>
    );
  }
}

export default App;
