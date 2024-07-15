import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signin from "../component/Auth/Signin";
import Signup from "../component/Auth/Signup";
import PrivateRoute from "./PrivateRoute";
import ChatBoxPage from "../component/ChatApplication/ChatBoxPage";

const route = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRoute><App /></PrivateRoute>,
    },
    {
        path: '/sign-up',
        element: <Signup />,
    },
    {
        path: '/sign-in',
        element: <Signin />,
    }, {
        path: "/chats",
        element: <PrivateRoute><ChatBoxPage /></PrivateRoute>
    }

])

export default route