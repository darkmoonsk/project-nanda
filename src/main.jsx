import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import App from "./App";
import { LanguageProvider } from "./contexts/LanguageContext";
import Contact from "./pages/Contact";
import EmailSent from "./pages/EmailSent";
import EmailError from "./pages/EmailError";

const route = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "emailSent",
                element: <EmailSent />
            },
            {
                path: "error",
                element: <EmailError />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
    <LanguageProvider>
        <RouterProvider router={route} />
    </LanguageProvider>
    </React.StrictMode>
);
