import React, { useState } from 'react'
import NavMobile from './NavMobile';

const Nav = ({ idioma }) => {
    const [menu, setMenu] = useState(false)
    return (
        <nav className='bg-white border-b border-gray w-full h-12 px-5 py-3 fixed top-0 left-0 z-[99999] flex justify-center'>
            <i onClick={() => setMenu(!menu)} className="fa-solid fa-bars md:hidden text-xl absolute left-5 hover:opacity-70"></i>
            <span className='hidden lg:block text-lg font-semibold font-Paprika absolute left-20'>Jenny Santamaría</span>
            <ul className="hidden w-full lg:w-1/3 h-full md:flex justify-around">
                <li className='font-medium font-Paprika hover:opacity-40 transition-all duration-400 cursor-pointer'>
                    <a href={idioma.id == 1 ? '#habilidades' : '#skills'} >{idioma.id == 1 ? 'Habilidades' : 'Skills'}</a>
                </li>
                <li className='font-medium font-Paprika hover:opacity-40 transition-all duration-400 cursor-pointer'>
                    <a href={idioma.id == 1 ? '#sobre' : '#about'} >{idioma.id == 1 ? 'Sobre mi' : 'About me'}</a>
                </li>
                <li className='font-medium font-Paprika hover:opacity-40 transition-all duration-400 cursor-pointer'>
                    <a href={idioma.id == 1 ? '#proyectos' : '#projects'} > {idioma.id == 1 ? 'Proyectos' : 'Projects'}</a>
                </li>
                <li className='font-medium font-Paprika hover:opacity-40 transition-all duration-400 cursor-pointer'>
                    <a href={idioma.id == 1 ? '#certificados' : '#certificates'} > {idioma.id == 1 ? 'Certificados' : 'Certificates'}</a>
                </li>
                <li className=' font-medium font-Paprika hover:opacity-40 transition-all duration-400 cursor-pointer'>
                    <a href={idioma.id == 1 ? '#contacto' : '#contact'} > {idioma.id == 1 ? 'Contacto' : 'Contact'}</a>
                </li>
            </ul>
            {menu && <NavMobile idioma={idioma} />}
        </nav>
    );
};

export default Nav;