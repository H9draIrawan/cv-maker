import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Introduction from "./pages/Introduction";

const route = createBrowserRouter([
	{
		index: true,
		element: <Introduction />,
	},
	{
		path: "auth",
		children: [
			{
				path: "login",
				element: <></>,
			},
			{
				path: "register",
				element: <></>,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={route} />
	</StrictMode>,
);
