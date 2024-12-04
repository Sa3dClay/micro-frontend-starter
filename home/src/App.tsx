import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import "remixicon/fonts/remixicon.css";
import "./styles/common-styles.css";
import "cart/login-styles";

import MainLayout from "./MainLayout";

const rootElement = document.getElementById("app");

if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<MainLayout />);
