import "./App.scss";
import React from "react";
import MyState from "./Context/myState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyComponents from "./Pages/MyComponents";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";

function App() {
  return (
    <MyState>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>} />
          <Route path="MyResume" element={<Resume/>} />
          <Route path="MyComponents" element={<MyComponents/>} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </MyState>
  );
}
export default App;
