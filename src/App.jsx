import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

import Contact from "./Pages/Contact/Contact";
import Fixed from "./Pages/Fixed/Fixed";
import NotFound from "./Pages/NotFound/NotFound";
import Portoflio from "./Pages/Portoflio/Portoflio";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Fixed />,
      children: [
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Portoflio",
          element: <Portoflio />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
        {
          path: "/Home",
          element: <Home />,
        },
        {
          index: true,
          element: <Navigate to="/Home" />,
        },
      ],
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
