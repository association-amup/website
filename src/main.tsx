import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import RootLayout from "./layouts/RootLayout";
import News from "./pages/News";
import Objectives from "./pages/Objectives";
import Activities from "./pages/Activities";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RootLayout />}>
					<Route index element={<Home />} />
					<Route path="actualites" element={<News />} />
					<Route path="objectifs" element={<Objectives />} />
					<Route path="activites" element={<Activities />} />
					<Route path="contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
