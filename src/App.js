import { NavBar } from "./Components/HomePageComponents/ImportComponents";
import { HomePage } from "./Pages/ImportPages";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
