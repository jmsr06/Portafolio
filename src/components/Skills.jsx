import { content } from "../Content"

const Skills = ({idioma}) => {
  const { skills } = content
  return (
    <section id={idioma.id == 1 ? 'habilidades' : 'skills'} className="min-h-fit bg-bg_light_primary">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">{idioma.id == 1 ? skills.title : skills.title_en}</h2>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 200}
              key={index}
              className="bg-white relative group w-full flex items-center gap-5 max-w-sm rounded-md border-2 border-slate-200 p-4">
              <div>
                <img src={skill.logo} className="w-10 group-hover:scale-125 duration-200" />
              </div>
              <div>
                <h6>{skill.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
