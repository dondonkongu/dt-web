import React from 'react';
import { Link } from 'react-router-dom';
import FlyoutLink from '../../../../components/FlyoutLink';

export default function Header() {
    const FlyoutContent = () => {
        return (
            <div className=" flex flex-row h-fit w-fit bg-white p-6 ">
                <ul className="flex flex-col space-y-2 px-4 ">
                    <li>
                        <Link to="/products" className="hover:text-gray-400">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className="hover:text-gray-400">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className="hover:text-gray-400">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className="hover:text-gray-400">
                            Products
                        </Link>
                    </li>
                </ul>
                <ul className="flex flex-col space-y-2 px-4">
                    <li>
                        <Link to="/products" className="hover:text-gray-400">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className="hover:text-gray-400">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className="hover:text-gray-400">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className="hover:text-gray-400">
                            Products
                        </Link>
                    </li>
                </ul>
                <ul className="flex flex-col space-y-2 px-4">
                    <li>
                        <Link to="/products" className="hover:text-gray-400">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className="hover:text-gray-400">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className="hover:text-gray-400">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className="hover:text-gray-400">
                            Products
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };
    return (
        <header className="fixed top-0 left-0 w-full bg-white z-10 shadow-lg">
            <nav className="relative flex justify-between items-center py-4 px-6">
                <div className="text-2xl font-bold">
                    <Link to="/">DT Store</Link>
                </div>
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <div className="container">
                            <FlyoutLink href="#" FlyoutContent={FlyoutContent}>
                                Nam
                            </FlyoutLink>
                        </div>
                    </li>
                    <li>
                        <div className="container">
                            <FlyoutLink href="#" FlyoutContent={FlyoutContent}>
                                Nữ
                            </FlyoutLink>
                        </div>
                    </li>
                    <li>
                        <div className="container">
                            <FlyoutLink href="#" FlyoutContent={FlyoutContent}>
                                Đồ đôi
                            </FlyoutLink>
                        </div>
                    </li>
                    <li>
                        <div className="container">
                            <FlyoutLink href="#" FlyoutContent={FlyoutContent}>
                                Trẻ em
                            </FlyoutLink>
                        </div>
                    </li>
                    <li>
                        <div className="container">
                            <FlyoutLink href="#" FlyoutContent={FlyoutContent}>
                                Bộ sưu tập
                            </FlyoutLink>
                        </div>
                    </li>
                    <li>
                        <div className="container">
                        <FlyoutLink href="#" FlyoutContent={FlyoutContent}>Phụ kiện</FlyoutLink>
                        </div>
                    </li>
                    <li>
                        <div className="container">
                        <FlyoutLink href="#" FlyoutContent={FlyoutContent}>Tin tức</FlyoutLink>
                        </div>
                    </li>
                </ul>

                <div className="flex space-x-4">
                    <Link to="/login" className="hover:text-gray-400">
                        Login
                    </Link>
                    <Link to="/cart" className="hover:text-gray-400">
                        Cart
                    </Link>
                </div>

                <div className="md:hidden">
                    <button className="focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}
