import { content } from "../Content"
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react'

const Projects = ({idioma}) => {
  const { Projects } = content;
  const [jobs, setJobs] = useState(Projects.project_content)
  const handleClick = (id) => {
    setJobs(jobs.map((job) => {
      if (job.id == id) {
        job.flip = !job.flip
      }
      return job
    }))
  };
  return (
    <section id={idioma.id == 1 ? 'proyectos' : 'projects'} className="min-h-fit bg-bg_light_primary">
      <div className="md:container px-5 py-14">
        <h2 className="title mb-6" data-aos="fade-down">{idioma.id == 1 ? Projects.title : Projects.title_en}</h2>
        <br />
        <div className="flex flex-wrap gap-16 justify-center">
          {jobs && jobs.map((project, index) => (
            <ReactCardFlip isFlipped={project.flip} flipDirection="horizontal" key={index}>
              <div
                onClick={() => handleClick(project.id)}
                className={`bg-${project.color} hover:opacity-75 cursor-pointer border-2 border-black relative group w-72 h-72 flex flex-col justify-center rounded-md  p-4`}>
                <div>
                  <img src={project.image} className="w-full" />
                </div>
              </div>
              <div
                onClick={() => handleClick(project.id)}
                className={`bg-${project.color} hover:opacity-75 cursor-pointer border-2 border-black relative group w-72 h-72 flex items-center rounded-md `}>
                <div>
                  <p className={`mx-10 font-semibold text-justify text-${project.color_description}`}>{idioma.id == 1 ? project.description : project.description_en}</p>
                  <div className="flex justify-center items-center mt-6">
                    <a href={project.url} target="_blank" className={`font-semibold cursor-pointer hover:opacity-50 p-2 text-${project.color_description} rounded-lg border border-${project.color_description}`}>{idioma.id == 1 ? 'Ver más' : 'See more'}</a>
                  </div>
                  <div className="absolute bottom-3 flex w-full justify-center items-center gap-1">
                    {project.technologies.map((technologie, index) => (
                      <span className={`text-xs text-${project.color_description}`} key={index}> {technologie} {index != (project.technologies.length - 1) ? "|" : ""}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ReactCardFlip>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
