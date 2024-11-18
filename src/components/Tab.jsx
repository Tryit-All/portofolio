import React, { useState, useEffect } from 'react';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaMeta } from "react-icons/fa6";
import { SiShopee } from "react-icons/si";

const SocialLayout = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const items = [
        {
            icon: <FaMeta size={20} color="#0A66C2" />,
            text: "Meta"
        },
        {
            icon: <IoLogoLinkedin size={18} color="#0A66C2" />,
            text: "LinkedIn",
            iconPosition: "end"
        },
        {
            icon: <SiShopee size={20} color="#EC6408" />,
            text: "Shopee"
        },
        {
            icon: "",
            text: "Lazada",
            iconPosition: "end"
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 4);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const SocialItem = ({ item }) => (
        <div className="container w-2/5 h-10 gap-2 bg-background flex items-center justify-center">
            {!item.iconPosition && item.icon}
            <p className="font-semibold text-white">{item.text}</p>
            {item.iconPosition === 'end' && item.icon}
        </div>
    );

    return (
        <div className="relative mt-20 h-screen w-full">

            <div className="absolute top-9 left-0 right-0 h-full bg-social-accent" />

            <div className="absolute left-1/2 transform -translate-x-1/2 w-full flex justify-center">
                <div className="relative h-16 w-11/12 lg:w-10/12 lg:px-8 rounded-s-xl rounded-e-xl bg-secondary-text">

                    <div className="lg:hidden flex justify-center items-center h-full gap-5">
                        <SocialItem item={items[currentSlide]} />
                        <SocialItem item={items[(currentSlide + 1) % items.length]} />
                    </div>

                    <div className="hidden lg:flex justify-center items-center h-full gap-5">
                        {items.map((item, index) => (
                            <SocialItem key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialLayout;