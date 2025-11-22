import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About_Kai/About";
import Families from "../Pages/Families/Families";
import Schools from "../Pages/Schools/Schools";
import Professionals from "../Pages/Professionals/Professionals";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/about",
                Component: About
            },
            {
                path: "/families",
                Component: Families
            },
            {
                path: "/schools",
                Component: Schools
            },
            {
                path: "/professionals",
                Component: Professionals
            },
            {
                path: "/*",
               Component: NotFoundPage
            },
        ]
    }
])

export default router;