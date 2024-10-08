import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Header() {
	return (
		<header
			className="sticky top-0 z-20
			w-full mx-auto
			flex items-center justify-between flex-wrap"
		>
			<h1 className="text-2xl font-bold">
				<Link to="/">
					<img src="/amup-logo.png" className="w-16 h-16" />
				</Link>
			</h1>
			<Navbar />
		</header>
	);
}
