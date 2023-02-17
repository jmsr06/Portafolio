import { content } from "../Content"
const Hero = ({ idioma }) => {
  const { hero } = content
  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10">
          <h1 className="hidden md:block md:rotate-90 absolute md:top-[50%] md:right-[-37%] lg:top-[60%] text-dark_primary">{hero.firstName} {" "}
            <span className="text-white">{hero.LastName}</span>
          </h1>
        </div>
        <div className="w-full absolute top-[50%] md:top-[60%] lg:top-[60%] left-10 md:left-28 lg:left-20" data-aos="fade-down">
          <h2 className="text-[40px] lg:text-[45px]">{ idioma.id == 1 ? hero.title : hero.title_en}</h2>
          <div
            data-aos="fade-down"
            data-aos-delay={300}
            className="flex flex-col md:gap-3 mt-10 ">
            <h1 className="text-dark_primary md:hidden text-[25px]">{hero.firstName} {" "} {hero.LastName}</h1>
            <h3 className="text-xl md:text-3xl">{idioma.id == 1 ? hero.hero_content.title : hero.hero_content_en.title}</h3>
            <p>{hero.hero_content.text}</p>
          </div>
        </div>
        <div className="absolute top-[15%] lg:top-[6%] md:mr-32 lg:-mr-36">
          <img
            data-aos="slide-up"
            src={hero.image} className="h-48 md:h-96"></img>
        </div>
      </div>
    </section>
  )
};

export default Hero;
