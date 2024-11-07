import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import "home/common-styles";
import SafeComponent from "./components/safe-component";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

const Header = React.lazy(() => import("home/header"));
const Footer = React.lazy(() => import("home/footer"));

const Loader = (text: string) => (
  <h1 className="text-center text-2xl">Loading {text} ...</h1>
);

const App = () => (
  <>
    <Suspense fallback={Loader("header")}>
      <SafeComponent>
        <Header />
      </SafeComponent>
    </Suspense>
    <div className="my-10 mx-auto max-w-6xl">
      <RouterProvider router={router} />
    </div>
    <Suspense fallback={Loader("footer")}>
      <Footer />
    </Suspense>
  </>
);

const rootElement = document.getElementById("app");

if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
