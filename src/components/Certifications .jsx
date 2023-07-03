const Certifications = () => {
  const certifications = [
    {
      name: "Certification 1",
      image:
        "https://github.com/Abu-ellil/AbuEllil-portfolio/blob/main/src/assets/certf/code.png?raw=true",
      issuer: " Build Responsive Real-World Websites with HTML and CSS",
      date: "December 2022",
      link: "https://github.com/Abu-ellil/AbuEllil-portfolio/blob/main/src/assets/certf/code.png?raw=true",
    },
    {
      name: "Certification 2",
      image:
        "https://github.com/Abu-ellil/AbuEllil-portfolio/blob/main/src/assets/certf/js.png?raw=true",
      issuer: "JavaScript - The Complete Guide 2023 (Beginner + Advanced)",
      date: "February 2023",
      link: "https://github.com/Abu-ellil/AbuEllil-portfolio/blob/main/src/assets/certf/js.png?raw=true",
    },
    {
      name: "Certification 2",
      image:
        "https://github.com/Abu-ellil/AbuEllil-portfolio/blob/main/src/assets/certf/reactjs.png?raw=true",
      issuer: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      date: "April 2023",
      link: "https://github.com/Abu-ellil/AbuEllil-portfolio/blob/main/src/assets/certf/reactjs.png?raw=true",
    },
    {
      name: "Certification 3",
      image:
        "https://github.com/Abu-ellil/AbuEllil-portfolio/blob/main/src/assets/certf/node.png?raw=true",
      issuer: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
      date: "May 2023",
      link: "https://github.com/Abu-ellil/AbuEllil-portfolio/blob/main/src/assets/certf/node.png?raw=true",
    },
    {
      name: "Certification 3",
      image:
        "https://github.com/Abu-ellil/AbuEllil-portfolio/blob/main/src/assets/certf/1670172004596.png?raw=true",
      issuer: "Programming Foundations: Beyond the Fundamentals",
      date: "December, 2022",
      link: "https://github.com/Abu-ellil/AbuEllil-portfolio/blob/main/src/assets/certf/1670172004596.png?raw=true",
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
