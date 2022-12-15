import headshot from '../assets/images/jacob-headshot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div className='home'>
      <img src={headshot} alt='jacob-canepa-headshot' className='rounded-full headshot' />
      <div className='p-2'>
        <h2 className='font-bold text-3xl'>Full Stack Developer | Video Editor</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus.
        </p>
      </div>
      <div>
        <a href='https://www.linkedin.com/in/jacob-canepa-568740198/' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href='https://github.com/jacobmcanepa/' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}

export default Home;