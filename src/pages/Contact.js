import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section className='contact-section'>
      <div className='bg-primary rounded-xl p-14 text-third text-center'>
        <h2 className='font-bold lg:text-8xl text-6xl italic'>Like what you see?</h2>
        <div className='mt-8'>
          <a href="mailto:jacobmcanepa@gmail.com" className='contact-button rounded-xl font-bold italic p-4 text-4xl'>
            Email Me <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <span className='text-5xl mx-6'>|</span>
          <a href='https://www.linkedin.com/in/jacob-canepa-568740198/' target='_blank' rel='noreferrer' className='text-6xl mx-2 contact-socials'>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href='https://github.com/jacobmcanepa/' target='_blank' rel='noreferrer' className='text-6xl mx-2 contact-socials'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer' className='text-6xl mx-2 contact-socials'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;