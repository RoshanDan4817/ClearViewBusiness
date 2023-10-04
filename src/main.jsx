import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material";
import App from "./App.jsx";
import "./index.css";

// const theme = createTheme({
// 	palette: {
// 		primary: {
// 			main: "#f59d2b",
// 		},
// 		secondary: {
// 			main: "#182e5e",
// 		},
// 		background: {
// 			default: "#ffffff",
// 			paper: "#f5f5f5",
// 		},
// 		text: {
// 			primary: "#182e5e",
// 			secondary: "#f59d2b",
// 		},
// 	},
// });
const theme = createTheme({
	palette: {
		primary: {
			main: "#0069c0",
			dark: "#004986",
			light: "#3387cc",
		},
		secondary: {
			main: "#28a745",
			dark: "#1c7430",
			light: "#53b86a",
		},
		accent: {
			main: "#ff9800",
			dark: "#b26a00",
			light: "#ffac33",
		},
		background: {
			default: "#ffffff",
			paper: "#f5f5f5",
		},
		text: {
			main: "#333333",
			dark: "#232323",
		},
	},

	typography: {
		fontFamily: '"Poppins", sans-serif',

		caption: {
			fontSize: 12,
			"@media (min-width:600px)": {
				fontSize: 14,
			},
			"@media (min-width:960px)": {
				fontSize: 16,
			},
			"@media (min-width:1280px)": {
				fontSize: 18,
			},
		},
		body1: {
			fontSize: 16,
			"@media (min-width:600px)": {
				fontSize: 20,
			},
			"@media (min-width:960px)": {
				fontSize: 24,
			},
			"@media (min-width:1280px)": {
				fontSize: 28,
			},
		},
		body2: {
			fontSize: 14,
			"@media (min-width:600px)": {
				fontSize: 18,
			},
			"@media (min-width:960px)": {
				fontSize: 22,
			},
			"@media (min-width:1280px)": {
				fontSize: 26,
			},
		},
		h1: {
			fontSize: 36,
			"@media (min-width:600px)": {
				fontSize: 48,
			},
			"@media (min-width:960px)": {
				fontSize: 60,
			},
			"@media (min-width:1280px)": {
				fontSize: 72,
			},
		},
		h2: {
			fontSize: 28,
			"@media (min-width:600px)": {
				fontSize: 48,
			},
			"@media (min-width:960px)": {
				fontSize: 42,
			},
			"@media (min-width:1280px)": {
				fontSize: 48,
			},
		},
		h3: {
			fontSize: 22,
			"@media (min-width:600px)": {
				fontSize: 30,
			},
			"@media (min-width:960px)": {
				fontSize: 36,
			},
			"@media (min-width:1280px)": {
				fontSize: 42,
			},
		},
		h4: {
			fontSize: 16,
			"@media (min-width:600px)": {
				fontSize: 24,
			},
			"@media (min-width:960px)": {
				fontSize: 30,
			},
			"@media (min-width:1280px)": {
				fontSize: 36,
			},
		},
		h5: {
			fontSize: 14,
			"@media (min-width:600px)": {
				fontSize: 22,
			},
			"@media (min-width:960px)": {
				fontSize: 28,
			},
			"@media (min-width:1280px)": {
				fontSize: 32,
			},
		},
		h6: {
			fontSize: 12,
			"@media (min-width:600px)": {
				fontSize: 18,
			},
			"@media (min-width:960px)": {
				fontSize: 24,
			},
			"@media (min-width:1280px)": {
				fontSize: 28,
			},
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
