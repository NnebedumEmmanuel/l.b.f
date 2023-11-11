import { Outlet } from "react-router-dom";

import Header from "../components/Others/Header";
import FooterSection from "../components/SectionsPages/FooterSection";

export default function RootLayout() {
  return (
    <body className="root-layout">
      <header>
        <Header  />
      </header>
     
        <Outlet />
    
      
      <footer>
      <FooterSection/>

      </footer>
    </body>
  );
}
