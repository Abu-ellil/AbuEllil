import me2 from "../assets/me.png";
function About() {
  return (
    <section className="about" id="about">
      <div>
        <img className="about-img" src={me2} alt="" />
      </div>
      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h2>MERN Stack Developer!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          architecto doloribus consectetur voluptas molestiae hic, natus esse
          maiores accusamus, ipsa libero facilis vero magni et provident quos
          similique delectus nobis voluptatum totam pariatur! Velit eos atque
          nisi eum saepe tempora quaerat iste quam! Dolorem, tempora explicabo.
        </p>
        <a href="#" className="btn">
          Read More
        </a>
      </div>
    </section>
  );
}

export default About;
