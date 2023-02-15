import React from "react";
import DataTable from "./data-tables";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<DataTable/>);
