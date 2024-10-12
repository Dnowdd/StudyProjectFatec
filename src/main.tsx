import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "./components/theme/theme-provider";
import "./index.css";

import Home from "./Routes/Home";
import Dashboard from "./Routes/Dashboard";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const router = createBrowserRouter([
  /* {
    path: "/login",
    element: (
      <PageTransition>
        <Login />
      </PageTransition>
    ),
  },
  {
    path: "/register",
    element: (
      <PageTransition>
        <Register />
      </PageTransition>
    ),
  }, */
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: (
          <PageTransition>
            <Home />
          </PageTransition>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="font-geist">
      <ThemeProvider defaultTheme="light" storageKey="ui-theme">
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </div>
  </React.StrictMode>
);
