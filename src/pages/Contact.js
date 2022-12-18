import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section className='contact-section flex flex-col justify-center items-center text-center'>
      <div className='bg-primary p-8 w-full'>
        <h2 className='font-bold text-6xl'>Like what you see?</h2>
        <div>
          <a href='mailto:jacobmcanepa@gmail.com'>Email Me <FontAwesomeIcon icon={faEnvelope} /></a>
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
      </div>
    </section>
  );
}

export default Contact;