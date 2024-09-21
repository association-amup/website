import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function StyledLink(props: { text: string, url: string }) {
	return (
		<NavLink
			className="text-pink-500 text-xl font-semibold p-2 hover:text-pink-700"
			to={props.url}
		>
			{props.text}
		</NavLink>
	);
}

function Links() {
	return (
		<>
			<StyledLink text="Acceuil" url="/" />
			<StyledLink text="Actualites" url="/actualites" />
			<StyledLink text="Objectifs" url="/objectifs" />
			<StyledLink text="Activites" url="/activites" />
			<StyledLink text="Contact" url="/contact" />
		</>
	);
}

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<nav className="w-3/4 lg:w-1/3 flex justify-end">
				<div className="w-full hidden md:flex justify-between gap-3">
					<Links />
				</div>
				<div className="md:hidden">
					<button onClick={toggleNavbar}>
						{isOpen ? <X size={40} /> : <Menu size={40} />}
					</button>
				</div>
			</nav>
			{isOpen && (
				<div className="flex flex-col items-center basis-full md:hidden border-b border-b-black my-2">
					<Links />
				</div>
			)}
		</>
	);
}
