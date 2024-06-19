import { Provider as StoreProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { store } from "./store/store";
import "./theme/roboto";

export default function App() {
  return (
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  );
}
