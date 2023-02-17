import { content } from "../Content"

const Contact = ({ idioma }) => {
  const { Contact } = content
  return (
    <section id={idioma.id == 1 ? 'contacto' : 'contact'} className="bg-dark_primary text-white">
      <div className="flex flex-col justify-center items-center md:container md:grid md:grid-cols-2 px-5 py-14" data-aos="fade-down">
        <h2 className="title !text-white mb-10">{idioma.id == 1 ? Contact.title : Contact.title_en}</h2>
        <div className="flex gap-10">
          <div className="flex-1 flex-col ">
            {Contact.social_media.map((content, index) => (
              <div key={index}
                className="flex items-center gap-2">
                <i className={`${content.icon} text-2xl`}></i>
                <a href={content.link} className="font-Poppins" target="_blank">{content.text}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>);
};

export default Contact;
