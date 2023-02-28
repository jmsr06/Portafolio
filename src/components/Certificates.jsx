import React from 'react'

const Certificates = ({ idioma }) => {
    return (
        <section id={idioma.id == 1 ? 'certificados' : 'certificates'} className="min-h-fit">
            <div className="md:container px-5 py-14" data-aos="fade-down">
                <h2 className="title mb-10">{idioma.id == 1 ? 'Certificados' : 'Certificates'}</h2>
                <div className="flex flex-col bg-white relative group w-full gap-5 max-w-sm rounded-md border-2 border-slate-200 p-4">
                    <a href='https://freecodecamp.org/certification/jmsr06/front-end-development-libraries' target="_blank" className="text-xl font-bold hover:opacity-50 underline"> Front End Development Libraries</a>
                    <p className='text-base'>freecodecamp.org | {idioma.id == 1 ? 'Febrero' : 'February'} 2023</p>
                </div>
            </div>
        </section>
    )
}

export default Certificates
