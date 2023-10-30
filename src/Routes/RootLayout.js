import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <Header />
      </header>
      
      <footer></footer>
    </div>
  );
}
