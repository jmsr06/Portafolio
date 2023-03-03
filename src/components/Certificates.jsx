import React, { useEffect } from 'react'

const Certificates = ({ idioma }) => {

    return (
        <section id={idioma.id == 1 ? 'certificados' : 'certificates'} className="min-h-fit">
            <div className="md:container px-5 py-14" data-aos="fade-down">
                <h2 className="title mb-10" data-aos="fade-down">{idioma.id == 1 ? 'Certificados' : 'Certificates'}</h2>
                <br />
                <div className="flex flex-wrap gap-4 justify-center">
                    <div className="flex flex-col bg-white relative group w-full gap-5 max-w-sm rounded-md border-2 border-slate-200 p-4" data-aos="fade-up" data-aos-delay={400}>
                        <a href='https://www.efset.org/cert/61xsX1' target="_blank" className="text-xl font-bold hover:opacity-50 underline"> EF Standard English Test | B2</a>
                        <p className='text-base'>EF SET | {idioma.id == 1 ? 'Marzo' : 'March'} 2023</p>
                    </div>
                    <div className="flex flex-col bg-white relative group w-full gap-5 max-w-sm rounded-md border-2 border-slate-200 p-4" data-aos="fade-up" data-aos-delay={200}>
                        <a href='https://freecodecamp.org/certification/jmsr06/front-end-development-libraries' target="_blank" className="text-xl font-bold hover:opacity-50 underline"> Front End Development Libraries</a>
                        <p className='text-base'>freecodecamp.org | {idioma.id == 1 ? 'Febrero' : 'February'} 2023</p>
                    </div>
                    <div className="flex flex-col bg-white relative group w-full gap-5 max-w-sm rounded-md border-2 border-slate-200 p-4" data-aos="fade-up" data-aos-delay={200}>
                        <a href='https://www.freecodecamp.org/certification/jmsr06/responsive-web-design' target="_blank" className="text-xl font-bold hover:opacity-50 underline"> Responsive Web Design</a>
                        <p className='text-base'>freecodecamp.org | {idioma.id == 1 ? 'Marzi' : 'March'} 2023</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificates
