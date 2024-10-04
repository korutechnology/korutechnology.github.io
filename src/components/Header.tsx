import { Link } from "react-router-dom";
import NavLink from "./NavLink";

export default function Header({
    scrollToSection,
}: {
    scrollToSection: (sectionId: string) => void;
}) {
    return (
        <header className="px-4 lg:px-6 h-16 flex items-center">
            <Link className="flex items-center justify-center gap-1" to="#">
                <img
                    src={"/images/white-logo.avif"}
                    alt="Koru Strategy Advisors Logo"
                    height={"40px"}
                    width={"40px"}
                    loading="lazy"
                />
                <span className="hidden md:block font-bold">
                    Koru Strategy Advisors
                </span>
                <span className="md:hidden font-bold">Koru</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <NavLink
                    to="#services"
                    onClick={() => scrollToSection("services")}
                >
                    Services
                </NavLink>
                <NavLink to="#about" onClick={() => scrollToSection("about")}>
                    About
                </NavLink>
                <NavLink
                    to="#careers"
                    onClick={() => scrollToSection("careers")}
                >
                    Careers
                </NavLink>
                <NavLink
                    to="#contact"
                    onClick={() => scrollToSection("contact")}
                >
                    Contact
                </NavLink>
            </nav>
        </header>
    );
}
