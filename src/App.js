import "./App.scss";
import React from "react";
import MyState from "./Context/myState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyComponents from "./Pages/MyComponents";
import MainLayout from "./Pages/MainLayout";
import Home from "./Pages/Home";

function App() {
  return (
    <MyState>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>} />
          {/* <Route path="My Projects" element={<Projects/>} /> */}
          <Route path="MyComponents" element={<MyComponents/>} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </MyState>
  );
}
export default App;
