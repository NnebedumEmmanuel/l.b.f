import "./App.css";
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

//pages
import Home from "./Pages/Home";
import { About } from "./Pages/About";
import { Sermons } from "./Pages/Sermons";
import { Contact } from "./Pages/Contact";


//Routes
import RootLayout from "./Routes/RootLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Sermons" element={<Sermons />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
