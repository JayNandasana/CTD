import Nevbar from "./components/Nevbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetLogin from "./components/GetLogin";
import GetRegister from "./components/GetRegister";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nevbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="GetLogin" element={<GetLogin/>} />
          <Route path="GetRegister" element={<GetRegister/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
