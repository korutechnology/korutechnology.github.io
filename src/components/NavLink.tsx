import { Link } from "react-router-dom";

export default function NavLink({
    to,
    onClick,
    children,
}: {
    to: string;
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to={to}
            onClick={onClick}
        >
            {children}
        </Link>
    );
}
