import React from "react";
import { FaMedium, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";


export default function Footer() {
    return (
        <>
            <div className="w-full h-52 py-12 bg-[#D7CEFF] text-center text-gray-600">
                <div className="flex text-center justify-center items-center mb-8">
                    <a href="https://www.linkedin.com/in/bhupeshsahu/"><FaLinkedinIn className="w-7 h-7 ml-2 mr-2 hover:text-gray-950 hover:cursor-pointer"/></a>
                    <a href="https://medium.com/@bhupeshsahu2312"><FaMedium className="w-7 h-7 ml-2 mr-2 hover:text-gray-950 hover:cursor-pointer"/></a>
                    <a href="https://github.com/23Bhupesh"><FaGithub className="w-7 h-7 ml-2 mr-2 hover:text-gray-950 hover:cursor-pointer"/></a>
                    <a href="mailto:bhupeshsahu2312@gmail.com"><TbMailFilled className="w-7 h-7 ml-2 mr-2 hover:text-gray-950 hover:cursor-pointer"/></a>
                </div>

                <div className="mb-4 text-sm font-semibold ">&copy; ALL RIGHTS RESERVED</div>
                <div className="pb-5 text-sm">Designed by <a href="https://www.linkedin.com/in/bhupeshsahu/"><span className="text-lg hover:text-black">Bhupesh Sahu</span></a></div>
            </div>
        </>
    );

}