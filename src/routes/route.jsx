import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signin from "../component/Auth/Signin";

const route = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/sign-in',
        element: <Signin />,
    }

])

export default route