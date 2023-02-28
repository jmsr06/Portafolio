import React, { useState } from 'react'

const NavMobile = ({idioma}) => {
    return (
        <nav className='bg-white border-r border-gray w-40 h-screen absolute px-5 py-3 top-12 left-0 z-[99999] flex justify-center'>
            <ul className="w-full flex flex-col gap-5 my-5">
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
        </nav>
    );
};

export default NavMobile;