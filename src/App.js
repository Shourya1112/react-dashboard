import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import "./styles/App.css"

function App() {


  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}/>
          <Route path="/app" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
