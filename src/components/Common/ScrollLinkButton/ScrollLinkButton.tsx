import React from 'react';
import {Link} from "react-scroll";

const ScrollLinkButton = ({ to, icon, label }: {to: string, icon?: JSX.Element, label: string}) => {
    return (
        <div className='flex mx-auto text-xl md:text-3xl py-4 px-7 bg-red-500 rounded-lg hover:text-black'>
            <Link
                to={to}
                smooth={true}
                offset={-70}
                duration={500}
                className='flex flex-row justify-center items-center cursor-pointer'
            >
                {icon}
                <span className='ml-3'>{label}</span>
            </Link>
        </div>
    );
};

export default ScrollLinkButton;