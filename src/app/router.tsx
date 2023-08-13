import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Loading from "../components/atoms/Loading";
import Home from "../components/pages/Home";
import Layout from "../components/templates/Layout";

const About = React.lazy(() => import("../components/pages/About"));
const NotFound = React.lazy(() => import("../components/pages/NotFound"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="about"
        element={
          <React.Suspense fallback={<Loading />}>
            <About />
          </React.Suspense>
        }
      />
      <Route
        path="*"
        element={
          <React.Suspense fallback={<Loading />}>
            <NotFound />
          </React.Suspense>
        }
      />
    </Route>
  )
);
