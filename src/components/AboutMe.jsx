import about from "../assets/images/Hero/about.png";

const AboutMe = ({ idioma }) => {
    return (
        <section id={idioma.id == 1 ? 'sobre' : 'about'} className="min-h-fit">
            <div className="md:container px-5 py-14" data-aos="fade-down">
                <h2 className="title mb-10 lg:mb-0">{idioma.id == 1 ? 'Sobre mi' : 'About me'}</h2>
                <div className="flex flex-col lg:flex-row gap-16 justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-lg text-justify">
                            {idioma.id == 1 ? 'Ingeniera de sistemas de la Universidad Industrial de Santander con experiencia en desarrollo web, enfocado en el desarrollo frontend usando React.js. Soy una persona creativa, aprendo rápido y tengo gran interés en el desarrollo de aplicaciones web. Me gusta estar en constante aprendizaje de nuevas tecnologías.'
                                :
                                'Systems Engineer from the Universidad Industrial de Santander with experience in web development, focused on frontend development using React.js. I am a creative person, fast learner and I have great interest in web application development. I like to be constantly learning new technologies.'
                            }
                        </p>
                        <a href={idioma.id == 1 ? '/public/HV.pdf' : '/public/CV.pdf'} target="_blank" className="text-center hover:opacity-70 mt-10 font-bold font-Paprika w-[190px] p-2 rounded-md cursor-pointer bg-primaryLinear">{idioma.id == 1 ? 'Hoja de vida' : 'See my CV'}</a>
                    </div>
                    <img className="h-96" src={about} />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
