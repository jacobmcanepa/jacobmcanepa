import headshot from '../assets/images/jacob-headshot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div className='home'>
      <img src={headshot} alt='jacob-canepa-headshot' className='rounded-full headshot' />
      <div className='p-2 my-4'>
        <h2 className='font-bold text-5xl'>Full Stack Developer | Video Editor</h2>
        <p className='text-xl mt-4'>
          My goal, as a content creator, is to provide quality, cutting-edge products to my clients. 
          With my passion for creativity, learning, and core technical skills in full-stack web development, 
          I am confident I will be able help your team achieve its goals.
        </p>
      </div>
      <div className='text-8xl'>
        <a href='https://www.linkedin.com/in/jacob-canepa-568740198/' target='_blank' rel='noreferrer' className='m-4'>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href='https://github.com/jacobmcanepa/' target='_blank' rel='noreferrer' className='m-4'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href='https://www.instagram.com/' target='_blank' rel='noreferrer' className='m-4'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}

export default Home;