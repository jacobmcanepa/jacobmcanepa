import headshot from '../assets/images/jacob-headshot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div className="flex-1 flex flex-col lg:flex-row min-h-screen lg:items-center text-primary">
      <div class="order-first lg:ml-8">
        <img src={headshot} className='rounded-full headshot m-4' alt='jacob-canepa-headshot'/>
      </div>
      <main className='text-center lg:text-left mx-6'>
        <h2 className='font-bold text-8xl p-2'>Jacob Canepa</h2>
        <h3 className='font-bold text-6xl p-4'>Full Stack Developer | Video Editor</h3>
        <p className='text-4xl p-4'>
          My goal, as a content creator, is to provide quality, cutting-edge products to my clients. 
          With my passion for creativity, learning, and core technical skills in full-stack web development as well as 
          video editing, I am confident I will be able help your team achieve its goals.
        </p>
        <div className="text-8xl text-center">
          <a href='https://www.linkedin.com/in/jacob-canepa-568740198/' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedinIn} className='m-8' />
          </a>
          <a href='https://github.com/jacobmcanepa/' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faGithub} className='m-8' />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faInstagram} className='m-8' />
          </a>
        </div>
      </main>
    </div>
  );
}

export default Home;