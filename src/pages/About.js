function About() {
  return (
    <section className="about-section flex flex-col items-center justify-center">
      <div className="about-card text-center mt-20">
        <h2 className="font-bold text-7xl mb-4">About</h2>
        <p className="text-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus.
        </p>
      </div>
      <div className="about-card">
        <h2 className="text-center font-bold text-7xl mb-2">Skills</h2>
        <ul className="skills-list text-3xl px-4">
          <li>JavaScript, HTML, CSS, SQL, NoSQL</li>
          <li>MERN Stack, Handlebars, jQuery, Bootstrap, Tailwind, Jest, Sequelize, Mongoose, GraphQL</li>
          <li>Premiere Pro, After Effects, Final Cut Pro X, DaVinci Resolve</li>
        </ul>
      </div>
    </section>
  );
}

export default About;