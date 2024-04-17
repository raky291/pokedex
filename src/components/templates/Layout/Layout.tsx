import { Outlet } from "react-router-dom";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </div>
  );
}
