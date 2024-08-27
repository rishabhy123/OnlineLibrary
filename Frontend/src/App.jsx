import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Courses />} />
        <Route path="/Signup" element={<Signup />} />
        

      </Routes>
    </div>
  );
};

export default App;
