import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashBoardLayout from "../dashboard/DashBoardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import SignUp from "../components/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Products from "../components/Products";
import Cart from "../components/Cart";
import { FaUser } from "react-icons/fa6";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element:  <PrivateRoute><Shop /></PrivateRoute>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/book/:id",
        element:  <PrivateRoute><SingleBook /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://mern-book-server-9zt6.onrender.com/book/${params.id}`),
      },
      {
        path: "/Cart",
        element: <PrivateRoute><Cart/></PrivateRoute>,
      }
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/upload",
        element:  <PrivateRoute><UploadBook /></PrivateRoute>,
      },
      {
        path: "/admin/dashboard/manage",
        element:  <PrivateRoute><ManageBooks /></PrivateRoute>,
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element:  <PrivateRoute><EditBooks /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://mern-book-server-9zt6.onrender.com/book/${params.id}`),
      },
    ],
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "logout",
    element: <Logout/>
  },
  {
    path: "products",
    element: <Products/>
  }
]);

export default router;
