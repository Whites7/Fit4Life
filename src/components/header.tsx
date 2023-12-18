"use client"
import { NextPage } from "next";
import { useRouter, usePathname } from "next/navigation";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
//import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Header: NextPage = () => {

    const router = useRouter();
    const pathname = usePathname();
    const session = getServerSession();

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-2" id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="" className={pathname.includes("localhost") ? "block py-2 px-3 text-gray-900 dark:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" : "block py-2 px-3 text-blue-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} >Home</a>
                        </li>
                        <li>
                            <a href="kurse" className={pathname.includes("kurse") ? "block py-2 px-3 text-gray-900 dark:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" : "block py-2 px-3 text-blue-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} >Kurse</a>

                        </li>
                        <li>
                            <a href="abos" className={pathname.includes("abos") ? "block py-2 px-3 text-gray-900 dark:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" : "block py-2 px-3 text-blue-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} >Abos</a>
                        </li>
                        <li>
                            <a href="faq" className={pathname.includes("faq") ? "block py-2 px-3 text-gray-900 dark:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" : "block py-2 px-3 text-blue-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} >FAQ</a>
                        </li>
                        <li>

                        </li>
                    </ul>
                    {(!session || !pathname.includes("login")) === true ? (
                        <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                           <a href="login">Mitarbeiter Login</a> 
                        </button>) :
                        (<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                           <a href="dashboard">Dashboard</a>  
                        </button>)}

                </div>
                <div className="flex items-left md:order-1 space-x-3 ">
                    <a href="https://localhost/" className="flex items-center space-x-3">
                        <Image src="/next.svg" className="h-8" alt="Flowbite Logo" width={50} height={50} />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Fit4Life</span>
                    </a>
                </div>
            </div>
        </nav >

    );
};

export default Header;
