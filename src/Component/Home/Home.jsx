import React from "react";
import ReactTyped from "react-typed";
import "./Home.css";

const Home = () => {
  return (
    <section id="hero" class="d-flex flex-column justify-content-center">
      <div class="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Salman khan</h1>
        <p>
          I'm
          <span class="typed">
            <ReactTyped
              strings={["Designer", "Developer", "Freelancer", "Photographer"]}
              typeSpeed={80}
              backSpeed={50}
              loop
            />
          </span>
        </p>
        <div class="social-links">
          <a href="#" className="twitter">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#" className="google-plus">
            <i className="bx bxl-skype"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
