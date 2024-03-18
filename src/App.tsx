import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import My from "./pages/My";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my" element={<My />} />
      </Routes>
    </main>
  );
}

export default App;
