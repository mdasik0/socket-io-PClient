import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signin from "../component/Auth/Signin";
import Signup from "../component/Auth/Signup";

const route = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/sign-up',
        element: <Signup />,
    },
    {
        path: '/sign-in',
        element: <Signin />,
    }

])

export default route