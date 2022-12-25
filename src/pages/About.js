function About() {
  return (
    <section className="about-section flex flex-col justify-center lg:flex-row avoid-nav">
      <div className="white-card about-card col flex flex-col justify-center items-center">
        <h2 className="text-8xl font-bold">About</h2>
        <p className="text-3xl mt-8 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus.
        </p>
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