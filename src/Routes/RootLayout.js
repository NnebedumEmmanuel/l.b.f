import { Outlet } from "react-router-dom";

import Header from "../components/Others/Header";

export default function RootLayout() {
  return (
    <body className="root-layout">
      <header>
        <Header />
      </header>
     
        <Outlet />
    
      
      <footer>

      </footer>
    </body>
  );
}
