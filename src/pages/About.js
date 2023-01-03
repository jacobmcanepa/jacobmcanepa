import Resume from '../assets/downloads/Jacob_Canepa_Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <section className="about-section flex flex-col justify-center lg:flex-row avoid-nav">
      <div className="white-card about-card col flex flex-col justify-center items-center">
        <h2 className="text-8xl font-bold">About</h2>
        <p className="text-3xl mt-8 mb-5 text-center">
          My aspiration to live creatively and my fascination for computer technology is what led me to pusue
          work in web development and video production. I am a versatile video creator & web developer with multiple
          projects under my belt in both fields.
        </p>
        <p className="text-3xl text-center mb-5">
          In early 2016, I started creating videos for my friends, which led into a small freelancing
          career after high school. Since then, I've done projects for companies such as:
          Chegg, Motorcylces.com, Esthetics Center, & more! While working for those clients, I decided to
          dabble in coding & development. Then in 2022, I recieved a certificate for full stack web development
          from UC Davis.
        </p>
        <p className="text-3xl text-center pb-5">
          When I'm not working on creative projects, I prefer to be outdoors doing activities such as rock climbing & hiking.
        </p>
        <a href={Resume} className='resume-btn rounded-lg px-5 py-3 text-2xl font-bold' download>
          <button>Resume <FontAwesomeIcon icon={faDownload} /></button>
        </a>
      </div>
      <div className="white-card skills-card col flex flex-col justify-center items-center">
        <h2 className="text-8xl font-bold">Skills</h2>
        <ul className="skills-list text-4xl">
          <li>JavaScript, HTML, CSS, SQL, NoSQL</li>
          <li>MERN Stack, Handlebars, jQuery, Bootstrap, Tailwind, Jest, Sequelize, Mongoose, GraphQL</li>
          <li>Premiere Pro, After Effects, Final Cut Pro X, DaVinci Resolve</li>
        </ul>
      </div>
    </section>
  );
}

export default About;