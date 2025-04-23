import "./App.css";
// import Page1 from "./pages/Page1";
// import Page2 from "./pages/Page2";
// import Page3 from "./pages/Page3";
// import Page4 from "./pages/Page4";
// import Page7 from "./pages/Page7";
// import Page8 from "./pages/Page8";
// import Page9 from "./pages/Page9";
// import Page11 from "./pages/Page11";
// import Page12 from "./pages/Page12";
import Page13 from "./pages/Page13";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Page1 />}></Route> */}
        {/* <Route path="/" element={<Page2 />}></Route> */}
        {/* <Route path="/" element={<Page3 />}></Route> */}
        {/* <Route path="/" element={<Page4 />}></Route> */}
        {/* <Route path="/" element={<Page7 />}></Route> */}
        {/* <Route path="/" element={<Page8 />}></Route> */}
        {/* <Route path="/" element={<Page9 />}></Route> */}
        {/* <Route path="/" element={<Page11 />}></Route> */}
        {/* <Route path="/" element={<Page12 />}></Route> */}
        <Route path="/" element={<Page13 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
