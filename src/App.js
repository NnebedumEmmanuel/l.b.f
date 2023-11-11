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
import Blog from "./Pages/Blog";
import Cause from "./components/SectionsPages/Cause";
import Events from "./Pages/Events";
import Gallerry from "./Pages/Gallerry";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/Events" element={<Events class="active" />} />
      <Route path="/Cause" element={<Cause class="active" />} />
      <Route path="/Gallery" element={<Gallerry class="active" />} />
      <Route path="/Sermons" element={<Sermons class="active" />} />
      <Route path="/Blog" element={<Blog class="active" />} />
      <Route path="/contact" element={<Contact class="active" />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
