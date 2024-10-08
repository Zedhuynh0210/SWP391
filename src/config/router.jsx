import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/home";
import LoginPage from "../page/login";
import Register from "../page/register";
import Member from "../page/member";
import Dashboard from "../page/admin/dashboard";
import Inventory from "../page/admin/inventory";
import Services from "../page/admin/services";
import Orders from "../page/admin/orders";
import Users from "../page/admin/users";
import Admin from "../page/admin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path:"login",
    element: <LoginPage/>
  },
  {
    path:"register",
    element: <Register/>
  },
  {
    path:"member",
    element: <Member/>
  },
  {
    path:"admin",
    element: <Admin/>,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />, // Component cho trang Dashboard
      },
      {
        path: "services",
        element: <Services />, // Component cho trang Dashboard
      },
      {
        path: "inventory",
        element: <Inventory />, // Component cho trang Inventory
      },
      {
        path: "orders",
        element: <Orders />, // Component cho trang Orders
      },
      {
        path: "users",
        element: <Users />, // Component cho trang Users
      },
    ],
  },
  

]);
