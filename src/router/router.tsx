import Loading from "@/components/atoms/Loading";
import ErrorPage from "@/components/pages/ErrorPage";
import Pokedex from "@/components/pages/Pokedex";
import Root from "@/components/pages/Root";
import { Suspense, lazy } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const About = lazy(() => import("@/components/pages/About"));
const NotFound = lazy(() => import("@/components/pages/NotFound"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Pokedex />} />
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
    </Route>
  )
);
