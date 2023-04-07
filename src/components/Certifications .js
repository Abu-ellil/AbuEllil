import React from "react";
import html from "../img/certf/code.png";
import js from "../img/certf/js.png";
import mern from "../img/certf/mern.jpg";
import react from "../img/certf/react.jpg";


const Certifications = () => {
  const certifications = [
    {
      name: "Certification 1",
      image:
        "https://github.com/Abu-ellil/AbuEllil/blob/main/src/img/certf/code.png?raw=true",
      issuer: "Issuer 1",
      date: "May 2021",
      link: "https://www.udemy.com/certificate/UC-a731ae10-edd2-4291-906b-0b148d8703f0/",
    },
    {
      name: "Certification 2",
      image:
        "https://github.com/Abu-ellil/AbuEllil/blob/main/src/img/certf/js.png?raw=true",
      issuer: "Issuer 2",
      date: "June 2021",
      link: "https://example.com/certification-2",
    },
    {
      name: "Certification 3",
      image:
        "https://cdn.lynda.com/courses/751331-636924050181962939_540x960_thumb.jpg",
      issuer: "Issuer 3",
      date: "July 2021",
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
