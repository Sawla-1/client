import Home from "./pages/home/Home";
import SubClasses from "./pages/subClasses/SubClasses";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/subClasses" element={<SubClasses />} />
    </Routes>
    </Router>
  );
}

export default App;
