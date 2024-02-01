import React from "react";
import { RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

function Body() {
  let appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div className="h-full w-full relative">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
