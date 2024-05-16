import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={"/en"} />,
    },
    {
        path: "/:language",
        element: <App />,
    },
]);