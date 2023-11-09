import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddFood from "../pages/AddFood/AddFood";
import AvailableFood from "../pages/AvailableFood/AvailableFood";
import PrivateRoute from "./PrivateRoute";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import FoodRequest from "../pages/FoodRequest/FoodRequest";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/addFood',
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
      },
      {
        path: '/availableFood',
        element: <AvailableFood></AvailableFood>,
        loader: () => fetch('http://localhost:5000/foods')
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
      },
      {
        path: '/requests',
        element: <PrivateRoute><FoodRequest></FoodRequest></PrivateRoute>
      }
    ]
  },
]);



export default router;