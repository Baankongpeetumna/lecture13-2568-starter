import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import NotFoundImage from "./pages/ErrorPage";
import TodoCardPage from "./pages/TodoCardPage";
import TodoTablePage from "./pages/TodoTablePage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundImage />,
    children: [
      // localhost:xxxx/
      { index: true, element: <TodoCardPage /> },
      // localhost:xxxx/todotable
      { path: "todotable", element: <TodoTablePage /> },
    ],
  },
]);
