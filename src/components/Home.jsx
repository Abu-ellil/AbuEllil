import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import me from "../assets/me1.png";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Mahmoud AbuEllil</h1>
        <h3>
          And I'm a <span>MERN Stack Developer</span>
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vel
          eos reiciendis tenetur, et dicta quas mollitia quasi distinctio
          temporibus quidem, autem aliquam.
        </p>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/abu-ellil-806619254/">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/Abu-ellil">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://twitter.com/MahmoudAboelli3">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
        <a href="#" className="btn">
          Download CV
        </a>
      </div>
      <div>
        <img className="home-img" src={me} alt="" />
      </div>
    </section>
  );
}

export default Home;
