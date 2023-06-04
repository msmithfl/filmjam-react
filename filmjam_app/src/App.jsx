import Navbar from "../components/Navbar";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Jams from "../pages/Jams";
import CreateJam from "../pages/CreateJam";

const Container = styled.div``;

function App() {
  return (
    <Container>
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
    </Container>
  );
}

export default App;
