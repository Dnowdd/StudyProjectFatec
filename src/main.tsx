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
import Aulas from "./Routes/Aulas";
import Enem from "./Routes/Enem";
import Matérias from "./Routes/Matérias";
import Conteúdo from "./Routes/Conteúdo";

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
      {
        path: "aulas",
        element: (
          <PageTransition>
            <Aulas />
          </PageTransition>
        ),
      },
      {
        path: "aulas/:materia",
        element: (
          <PageTransition>
            <Matérias />
          </PageTransition>
        ),
      },
      {
        path: "aulas/:materia/:aula",
        element: (
          <PageTransition>
            <Conteúdo />
          </PageTransition>
        ),
      },
      {
        path: "enem",
        element: (
          <PageTransition>
            <Enem />
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
