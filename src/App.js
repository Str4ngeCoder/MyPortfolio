import "./App.scss";
// import MyState from "./Context/myState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyComponents from "./Pages/MyComponents";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";

function App() {
  return (
    <>
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
    </>
  );
}
export default App;
