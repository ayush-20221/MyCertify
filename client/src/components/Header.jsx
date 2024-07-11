import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return (
        <header className="fixed top-0 left-0 z-10 flex items-center justify-between w-full px-6 py-4 text-white shadow-md bg-gradient-to-r from-purple-500 to-pink-500">
            <h1 className="text-xl font-bold">MyCertify</h1>
            <nav>
                <button onClick={() => {navigate("/")}} className="mb-1 mr-4 text-white transition duration-300 ease-in-out hover:text-gray-200">
                    Create Certificate
                </button>
                <button onClick={() => {navigate("/view")}} className="mb-1 text-white transition duration-300 ease-in-out hover:text-black-200">
                    View Certificates
                </button>
            </nav>
        </header>
    );
}
