import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
