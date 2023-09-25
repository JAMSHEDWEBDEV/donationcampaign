import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex justify-center items-center mt-40">
            <div className="text-center">
                <div className="border-indigo-700 border-4 p-20 text-3xl font-bold">
                    <h1>Oops!!</h1>
                    <h2>No Data Found</h2>
                </div>
                <Link to="/">
                    <button className="bg-green-700 text-white px-4 py-2 rounded text-xl font-bold mt-8">Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;