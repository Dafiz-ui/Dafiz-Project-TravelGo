import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FlexItems from "./FlexItems.jsx";
import ProductCRUD from "./ProductCRUD.jsx";
import UserCRUD from "./UserCRUD.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <FlexItems />
    <ProductCRUD />
    <UserCRUD /> */}
  </StrictMode>
);
