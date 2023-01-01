import MusicMarket from '../assets/images/music-market.png';

function DevWork() {
  return (
    <section className="min-h-screen dev-section flex flex-col">
      <div className="lg:flex lg:justify-center lg:items-center">
        <h2 
        className="text-center text-primary font-serif font-bold lg:ml-10 lg:mr-5 pb-5 project-title">
          Projects
        </h2>
        <div className="order-first work-card rounded-lg mx-5">
          <a href="https://g02-music-market.herokuapp.com/" target='_blank' rel='noreferrer'>
            <figure className="txtover">
              <img src={MusicMarket} alt="" className='rounded-xl main-img' />
              <figcaption className='text-5xl'>Music Market</figcaption>
            </figure>
            <span>Below Text</span>
          </a>
        </div>
      </div>
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className='work-card rounded-lg'>Project #1</div>
        <div>Project #2</div>
        <div>Project #3</div>
      </div>
    </section>
  );
}

export default DevWork;