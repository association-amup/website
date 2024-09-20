import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
	return (
		<main className="w-11/12 md:w-3/4 m-auto">
			<Header />
			<Outlet />
		</main>
	);
}
