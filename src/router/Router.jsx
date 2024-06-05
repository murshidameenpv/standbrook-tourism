import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Info from "../pages/Info";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/> ,
            },
            {
                path: "/about",
                element: <Info />,
            },
            {
                path: "/menu",
                element: <Contact />,
            },
        ]
    }
]);


export default router;