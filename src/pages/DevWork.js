import MusicMarket from '../assets/images/music-market.png';
import WeatherDashboard from '../assets/images/weather-dashboard.png';
import TechBlog from '../assets/images/tech-blog.png';
import MovieApp from '../assets/images/movie-app.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function DevWork() {
  return (
    <section className="min-h-screen dev-section flex flex-col">
      <div className="work-layout">
        <h2 
        className="text-center text-primary font-serif font-bold lg:ml-10 lg:mr-5 pb-5 project-title">
          Projects
        </h2>
        <div className="order-first work-card rounded-xl mx-5">
          <a href="https://g02-music-market.herokuapp.com/" target='_blank' rel='noreferrer'>
            <figure className="txtover">
              <img src={MusicMarket} alt="" className='rounded-xl main-img img-style' />
              <figcaption 
              className='text-5xl md:text-9xl font-serif text-primary card-text rounded-xl p-4 text-center mx-6'>
                Music Market
              </figcaption>
            </figure>
            <div className='text-third text-center p-2 text-xl'>
              <span className='font-bold'>Role:</span> Back-end & Team Management
              <br />
              <span className='font-bold'>Tools:</span> MERN Stack | Cloudinary | GraphQL | Apollo Server | Stripe | Tailwind
              <br />
              <a href='https://github.com/jacobmcanepa/music-market' target='_blank' rel='noreferrer' className='secondary-hover'>
                <FontAwesomeIcon icon={faGithub} className='pt-2 text-5xl' />
              </a>
            </div>
          </a>
        </div>
      </div>
      <div className="work-layout m-5">
        <div className='work-card rounded-lg m-4'>
          <a href='https://jacobmcanepa.github.io/weather-dashboard/' target='_blank' rel='noreferrer'>
            <figure className='txtover'>
              <img src={WeatherDashboard} alt='' className='rounded-xl other-img img-style'/>
              <figcaption 
              className='text-5xl text-center font-serif text-primary card-text rounded-xl p-3 mx-5'>
                Weather Dashboard
              </figcaption>
            </figure>
            <div className='text-third text-center p-2 text-xl flex items-center justify-between'>
              <p className='ml-5'><span className='font-bold'>Role:</span> Sole Author</p>
              <a href='https://github.com/jacobmcanepa/weather-dashboard' target='_blank' rel='noreferrer' className='secondary-hover mr-5'>
                <FontAwesomeIcon icon={faGithub} className='text-5xl mt-1' />
              </a>
            </div>
          </a>
        </div>
        <div className='work-card rounded-lg m-4'>
          <a href='https://jc-techblog.herokuapp.com/' target='_blank' rel='noreferrer'>
            <figure className='txtover'>
              <img src={TechBlog} alt='' className='rounded-xl other-img img-style'/>
              <figcaption 
              className='text-5xl text-center font-serif text-primary card-text rounded-xl p-3 mx-5'>
                Jacob's Tech Blog
              </figcaption>
            </figure>
            <div className='text-third text-center p-2 text-xl flex items-center justify-between'>
              <p className='ml-5'><span className='font-bold'>Role:</span> Sole Author</p>
              <a href='https://github.com/jacobmcanepa/jacobs-techblog' target='_blank' rel='noreferrer' className='secondary-hover mr-5'>
                <FontAwesomeIcon icon={faGithub} className='text-5xl mt-1' />
              </a>
            </div>
          </a>
        </div>
        <div className='work-card rounded-lg m-4'>
          <a href='https://jc-movie-app.herokuapp.com/' target='_blank' rel='noreferrer'>
            <figure className='txtover'>
              <img src={MovieApp} alt='' className='rounded-xl other-img img-style'/>
              <figcaption 
              className='text-5xl text-center font-serif text-primary card-text rounded-xl p-3'>
                Movie App
              </figcaption>
            </figure>
            <div className='text-third text-center p-2 text-lg flex items-center justify-between'>
              <p className='ml-5'><span className='font-bold'>Role:</span> Back-end/OpenAI & Team Management</p>
              <a href='https://github.com/jacobmcanepa/movie-app' target='_blank' rel='noreferrer' className='secondary-hover mr-5'>
                <FontAwesomeIcon icon={faGithub} className='text-5xl mt-1 responsive-icon' />
              </a>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default DevWork;