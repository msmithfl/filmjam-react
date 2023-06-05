import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jams from "./pages/Jams";
import SignIn from "./pages/SignIn";
import CreateJam from "./pages/CreateJam";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* main route */}
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="jams" element={<Jams />} />
            <Route path="jams/create" element={<CreateJam />} />
            <Route path="signin" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
