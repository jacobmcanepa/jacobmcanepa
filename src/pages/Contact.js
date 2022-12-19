import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section className='contact-section flex justify-center items-center text-center'>
      <div className='bg-primary w-full p-6 mt-9 contact-card lg:w-2/3 lg:rounded-xl lg:p-10'>
        <h2 className='text-7xl font-bold mb-8 lg:text-8xl lg:mb-12'>Like what you see?</h2>
        <a href='mailto:jacobmcanepa@gmail.com' 
        className='rounded-xl p-3 text-4xl font-bold italic email-btn lg:text-5xl'>
          Email Me <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <div className='text-7xl mt-8 lg:text-8xl lg:mt-12'>
          <a href='https://www.linkedin.com/in/jacob-canepa-568740198/' target='_blank' rel='noreferrer' className='m-4 contact-social'>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href='https://github.com/jacobmcanepa/' target='_blank' rel='noreferrer' className='m-4 contact-social'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer' className='m-4 contact-social'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;