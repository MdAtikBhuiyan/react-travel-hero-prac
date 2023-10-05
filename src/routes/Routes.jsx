
import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: '',
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/booking',
                element: ''
            },
            {
                path: '/booking/:id'
            }
        ]
    },
]);

export default router;