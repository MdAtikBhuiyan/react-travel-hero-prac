
import {
    createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
        errorElement: '',
        children: [
            {
                path: '/',
                element: ''
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