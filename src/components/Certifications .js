import React from "react";
import html from "../img/certf/code.png";
import js from "../img/certf/js.png";
import mern from "../img/certf/mern.jpg";
import react from "../img/certf/react.jpg";


const Certifications = () => {
  const certifications = [
    {
      name: "Certification 1",
      image: {html},
      issuer: "Issuer 1",
      date: "May 2021",
      link: "https://example.com/certification-1",
    },
    {
      name: "Certification 2",
      image: {js},
      issuer: "Issuer 2",
      date: "June 2021",
      link: "https://example.com/certification-2",
    },
    {
      name: "Certification 3",
      image: "https://picsum.photos/200",
      issuer: "Issuer 3",
      date: "July 2021",
      link: "https://example.com/certification-3",
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
