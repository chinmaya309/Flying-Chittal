import React from "react";

import CareerFC from "../assets/images/CareerFC.png";
import Team from "../assets/images/Team.png";
import career1 from "../assets/images/career1.png";

export default function career() {
    return (
        <div>
            {/* Section-1 About us */}
            <section
                className=" bg-no-repeat bg-center bg-cover rounded-br-[100px]"
                style={{
                    backgroundImage: `linear-gradient(95deg, rgba(55, 52, 169, 0.60) 12.02%, rgba(55, 52, 169, 0.50) 119.37%), url(${career1})`,
                }}
            >
                <nav
                    x-data="{ isOpen: false }"
                    className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center"
                >
                    <div className="flex items-center justify-between">
                        {/* <a href="#">
                            <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt />
                        </a> */}
                        {/* Mobile menu button */}
                        <div className="flex lg:hidden"></div>
                    </div>
                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
                        {/* <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0">
                            <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Home</a>
                            <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Components</a>
                            <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Pricing</a>
                            <a className="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500" href="#">Contact</a>
                        </div> */}
                        {/* <a className="block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto" href="#">
                            Get started
                        </a> */}
                    </div>
                </nav>
                <div className="container px-6 py-16 mx-auto text-start">
                    <div className="mx-auto">
                        <h1 className="text-6xl not-italic font-bold font-heebo  text-gray-100 dark:text-white lg:text-6xl text-start">
                            Careers
                        </h1>
                        <p className=" text-3xl  leading-9 mt-6 text-white not-italic font-bold  font-heebo w-full">
                            We provide Smart Solutions to Simplify Your Future
                        </p>
                        {/* <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize  rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"></button> */}
                        <p className=" text-2xl not-italic font-normal  text-white bg-opacity-80 ">
                            Home / Careers
                        </p>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font mt-0">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative rounded-tl-lg overflow-hidden">
                        <img
                            className="object-cover object-center rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg"
                            alt="hero"
                            src={CareerFC}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="font-heebo text-[40px]  not-italic font-bold leading-9 title-font sm:text-4xl mb-4 text-start text-gray-900">
                            <span className=" font-heebo text-[40px] text-primary">
                                <span className="border-b-2 border-secondary">Our&nbsp;</span>
                            </span>
                            Team
                        </h1>
                        <p className="mb-8 mt-2 text-justify text-base not-italic font-normal leading-6 w-4/5">
                            Atulya Abhinav Tech Private Limited invites dynamic talent to join
                            our team and be a part of our groundbreaking journey in the realm
                            of Digital Transformation and Innovation, Automation of Enterprise
                            Workflow, Edge Computing, and Mobility, as well as Managed IT
                            Services. We are at the forefront of pioneering innovative
                            solutions that reshape industries, offering our employees the
                            unique opportunity to contribute to cutting-edge technology and
                            drive meaningful change. Our success is underpinned by a highly
                            competent founding team, unwavering values, and a visionary
                            outlook that ensures not only professional growth but also
                            personal fulfillment. With a commitment to good corporate
                            governance and a culture that fosters innovation, your career at
                            Atulya Abhinav Tech will be both satisfying and rewarding,
                            propelling you toward new horizons of success and personal
                            development. Join us to be a part of something extraordinary and
                            be at the forefront of technological innovation.
                        </p>
                    </div>
                </div>
            </section>

            <div className=" mt-20 ">
                <img
                    className="object-cover object-center  drop-shadow-lg"
                    alt="hero"
                    src={Team}
                />
            </div>
        </div>
    );
}