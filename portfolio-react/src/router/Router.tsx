import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.tsx";
import Layout from "../pages/Layout/Layout.tsx";
import About from "../pages/About.tsx";
import Meet from "../pages/Meet.tsx";
import MakeUp from "../pages/MakeUp.tsx";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/About",
                element: <About/>,
            },
            {
                path: "/Contact",
                element: <Meet/>,
            },
            {
                path: "/Portfolio",
                element: <MakeUp/>,
            }
        ]
    }
]);

export default Router;