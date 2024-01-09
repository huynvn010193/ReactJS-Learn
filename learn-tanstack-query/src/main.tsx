import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./app";
import Profile from "./pages/profile";
import TnxDetails from "./pages/tnx-details";
// import "./index.css";

const queryClient = new QueryClient();
const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "txn-details",
        element: <TnxDetails />,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
