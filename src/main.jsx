import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/service";
import Contact from "./pages/contact";
import Register from "./pages/register";
import Login from "./pages/login";
import Error from "./pages/error";
import TokenProvider from "./context/context.jsx";
import Adminlayout from "./layout/admin-layout.jsx";
import Admincontact from "./pages/admin-pages/admin-contact.jsx";
import Adminusers from "./pages/admin-pages/admin-users.jsx";
import Edit from './pages/admin-pages/edit.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="service" element={<Service />} />
      <Route path="contact" element={<Contact />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Error />} />
      <Route  path="admin" element={<Adminlayout/>}>
      <Route path="users" element={<Adminusers/>}/>
      <Route path="contact" element={<Admincontact/>}/>
      <Route path="/admin/users/:id/edit" element={<Edit/>} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TokenProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </TokenProvider>
  </StrictMode>
);
