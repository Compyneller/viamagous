import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Video from "./pages/Video/Video";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/video" element={<Video />} />
          <Route path="/date" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
