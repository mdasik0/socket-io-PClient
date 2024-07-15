import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const route = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/sign-in',
        element: <h1>Sign in Here</h1>
    }

])

export default route