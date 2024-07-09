import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/User";
import App from "./App";
import { BrandProvider } from "./contexts/brand";

// createRoot(document.getElementById("root")).render(<App />);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      <BrandProvider>
        <App />
      </BrandProvider>
    </UserProvider>
  </BrowserRouter>
);
