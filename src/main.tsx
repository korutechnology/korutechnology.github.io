import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Careers from "./pages/Careers/Careers.tsx";
import Home from "./pages/Home/Home.tsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/careers",
            element: <Careers />,
        },
    ],
    { basename: import.meta.env.BASE_URL }
);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
