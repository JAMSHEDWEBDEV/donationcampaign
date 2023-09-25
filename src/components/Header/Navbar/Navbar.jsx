import { NavLink } from "react-router-dom";
import "/src/assets/Logo.png";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center">
            <img className="w-fit" src={`/src/assets/Logo.png`} alt="" />
            <ul className="flex gap-6">
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