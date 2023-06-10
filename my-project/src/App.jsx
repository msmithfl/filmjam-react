import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jams from "./pages/Jams";
import SignIn from "./pages/SignIn";
import CreateJam from "./pages/CreateJam";
import Jam from "./pages/Jam";
import Dashboard from "./pages/Dashboard";
import JamEdit from "./pages/JamEdit";

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
            <Route path="dashboard" element={<Dashboard />} />
            {/* final path: url.com/jam/2134123 */}
            <Route path="jam">
              <Route path=":id" element={<Jam />} />
              <Route path=":id/edit" element={<JamEdit />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
