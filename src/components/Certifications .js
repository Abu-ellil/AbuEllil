import React from "react";



const Certifications = () => {
  const certifications = [
    {
      name: "Certification 1",
      image:
        "https://github.com/Abu-ellil/AbuEllil/blob/main/src/img/certf/code.png?raw=true",
      issuer: "Issuer 1",
      date: "December 2022",
      link: "https://www.udemy.com/certificate/UC-a731ae10-edd2-4291-906b-0b148d8703f0/",
    },
    {
      name: "Certification 2",
      image:
        "https://github.com/Abu-ellil/AbuEllil/blob/main/src/img/certf/js.png?raw=true",
      issuer: "Issuer 2",
      date: "February 2023",
      link: "https://www.udemy.com/certificate/UC-11cd8a7a-da8d-4ec4-8dd7-c9545f0edebb/",
    },
    {
      name: "Certification 2",
      image:
        "https://github.com/Abu-ellil/AbuEllil/blob/main/src/img/certf/reactjs.png?raw=true",
      issuer: "Issuer 2",
      date: "April 2023",
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux",
    },
    {
      name: "Certification 3",
      image:
        "https://github.com/Abu-ellil/AbuEllil/blob/main/src/img/certf/node.png?raw=true",
      issuer: "Issuer 3",
      date: "May 2023",
      link: "https://www.udemy.com/course/nodejs-the-complete-guide/",
    },
    {
      name: "Certification 3",
      image:
        "https://github.com/Abu-ellil/AbuEllil/blob/main/src/img/certf/1670172004596.png?raw=true",
      issuer: "Issuer 4",
      date: "December, 2022",
      link: "https://www.linkedin.com/learning/certificates/7e74ef7e58ab08aa3be9d7ab3cf3cb237a2d9527bb68b87b871905c225e6996b",
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
                <a href={certification.link} target="_blank" rel="noreferrer">
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
