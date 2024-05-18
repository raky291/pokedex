import { Suspense, lazy } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Loading from "../components/atoms/Loading/Loading";
import ErrorPage from "../components/pages/ErrorPage/ErrorPage";
import Pokedex from "../components/pages/Pokedex/Pokedex";
import Root from "../components/pages/Root/Root";

const About = lazy(() => import("../components/pages/About/About"));
const NotFound = lazy(() => import("../components/pages/NotFound/NotFound"));

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
