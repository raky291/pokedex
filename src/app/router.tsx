import { Suspense, lazy } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Loading from "../components/atoms/Loading/Loading";
import Home from "../components/pages/Home/Home";
import Layout from "../components/templates/Layout/Layout";

const About = lazy(() => import("../components/pages/About/About"));
const NotFound = lazy(() => import("../components/pages/NotFound/NotFound"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="about"
        element={
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        }
      />
    </Route>
  )
);
