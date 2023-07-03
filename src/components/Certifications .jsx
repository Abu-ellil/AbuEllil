const Certifications = () => {
  const certifications = [
    {
      name: "HTML&CSS",
      image:
        "https://raw.githubusercontent.com/Abu-ellil/AbuEllil-portfolio/main/src/assets/certf/code.png?token=GHSAT0AAAAAACCXZLGSSBKXJCQBOCBJJMS6ZFC5DZQ",
      issuer: " Build Responsive Real-World Websites with HTML and CSS",
      date: "December 2022",
      link: "https://drive.google.com/file/d/1rUQQgkE6BG0yyrmEUQkPgqeZUTSCuDK4/view?usp=sharing",
    },
    {
      name: "JavaScript-the complete guide",
      image: "https://www.mediafire.com/view/bi4cocsizpf5tnc/js.png/file",
      issuer: "JavaScript - The Complete Guide 2023 (Beginner + Advanced)",
      date: "February 2023",
      link: "https://drive.google.com/file/d/10n6FlNxcbwbqfYRuJfe6i5FRP8JzYc_8/view?usp=sharing",
    },
    {
      name: "Certification 2",
      image: "https://www.mediafire.com/view/bi4cocsizpf5tnc",
      issuer: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      date: "April 2023",
      link: "https://github.com/Abu-ellil/AbuEllil-portfolio/blob/main/src/assets/certf/reactjs.png?raw=true",
    },
    {
      name: "Certification 3",
      image:
        "https://github.com/Abu-ellil/AbuEllil-portfolio/assets/94858304/2497c1ed-913f-4e40-9607-1f64af266884",
      issuer: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
      date: "May 2023",
      link: "https://github.com/Abu-ellil/AbuEllil-portfolio/blob/main/src/assets/certf/node.png?raw=true",
    },
    {
      name: "Programming Foundations: Beyond the Fundamentals",
      image:
        "https://github.com/Abu-ellil/AbuEllil-portfolio/blob/main/src/assets/certf/1670172004596.png?raw=true",
      issuer: "Programming Foundations: Beyond the Fundamentals",
      date: "December, 2022",
      link: "https://drive.google.com/file/d/1B19ssRiWd9aIYg20eMv_pVnBToEAi8gS/view?usp=sharing",
    },
  ];

  return (
    <section className="certifications">
      <h2 className="heading">My 
        <span> Certifications</span>
      </h2>
      <div className="certifications-container">
        {certifications.map((certification) => (
          <div className="certification-card" key={certification.name}>
            <div className="certification-card-inner">
              <div className="certification-card-front">
                <img src={certification.image} alt={certification.name} />
                <h3>{certification.name}</h3>
              </div>
              <div className="certification-card-back">
                <h3>{certification.issuer}</h3>
                <p>Date: {certification.date}</p>
                <a className="btn" href={certification.link} target="_blank" rel="noreferrer">
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
