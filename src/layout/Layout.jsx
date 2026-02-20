import { Outlet } from "react-router";
import Nav from "../ui/Nav";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
