import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products/:pid" element={<ProductDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
