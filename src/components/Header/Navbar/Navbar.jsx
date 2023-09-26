import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex flex-col md:flex-col lg:flex-row justify-between items-center">
            <img src="https://i.ibb.co/9njPT43/logo.png" alt="logo.png" />
            <ul className="flex flex-col md:flex-row lg:flex-row mt-5 gap-6">
                <li className="text-xl font-bold">
                    <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }
                    >Home</NavLink>
                </li>
                <li className="text-xl font-bold">
                    <NavLink
                    to="/donation"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }
                    >Donation</NavLink>
                </li>
                <li className="text-xl font-bold">
                    <NavLink
                    to="/statistics"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }
                    >Statistics</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;