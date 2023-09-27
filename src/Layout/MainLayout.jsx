import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";

const MainLayout = () => {
    const navigation = useNavigation();
    return (
        <div className="container mx-auto p-3">
            <div className="my-8">
                <Navbar></Navbar>
            </div>
            {
                navigation.state === "loading" ? 
                 <p className="text-4xl font-bold flex justify-center items-center mt-48">Loading....</p> 
                :
                <Outlet></Outlet>
            }
            
        </div>
    );
};

export default MainLayout;