import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TodoListProvider from "./context/context";
import { GlobalStyles } from "./styles/globalStyles";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<TodoListProvider>
			<GlobalStyles />
			<App />
		</TodoListProvider>
	</React.StrictMode>
);
