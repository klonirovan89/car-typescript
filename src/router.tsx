import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom'
import {Layout} from "./layout/Layout";
import {HomePage} from "./pages/home-page";
import {InfoPage} from "./pages/info-page";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/home" replace />,
    },
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'home',
                element: <HomePage />,
            },
            {
                path: 'info/:id',
                element: <InfoPage />,
            },
            {
                path: '*',
                element: <Navigate to="/home" />,
            },
        ],
    },
]);

export const Router = () => {
    return <RouterProvider router={router} />;
};
