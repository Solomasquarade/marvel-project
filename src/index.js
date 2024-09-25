import { createRoot } from "react-dom/client";
import App from "./components/app/App";

import "./style/style.scss";
/*
cd my-app
npm start
*/

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
