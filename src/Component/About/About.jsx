import React from "react";
import "./About.css";
import profile_img from "../../assets/Images/profile-img.jpg";
import { skill, fact } from "../../mock/mock";

const personalInfo = [
  { title: "BirthDay", value: "28 march 1999" },
  { title: "Phone", value: "+92 3360973204" },
  { title: "City", value: "i-10/1 Islambad, Pakistan" },
  { title: "Age", value: "24" },
  { title: "Degree", value: "BS Computer Science" },
  { title: "Email", value: "itssaloobhai@gmail.com" },
];

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
            <p className="fst-italic">
              Proficient in MERN stack development, with a strong foundation in
              JavaScript, React, Node.js, and MongoDB. Experienced in building
              robust and scalable web applications from concept to deployment.
              Skilled in front-end development, utilizing React to create
              responsive and intuitive user interfaces. Proficient in
              server-side programming using Node.js, developing RESTful APIs and
              implementing database models with MongoDB. Familiar with modern
              web development tools and libraries, such as Redux, Express.js,
              and Mongoose. Excellent problem-solving and communication skills,
              with a passion for delivering high-quality software solutions.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <img src={profile_img} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3> WEB DEVELOPER.</h3>

              <div>
                <ul className="row">
                  {personalInfo.map((item) => {
                    return (
                      <li className="col-lg-6 mt-5">
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>{item.title}</strong> <span>{item.value}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <p className="mt-3">
                I have work on many project which includes personal project ,
                feverr project and software house project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="facts" className="facts">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Facts</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row">
            {fact.map((item) => {
              return (
                <div className="col-lg-4 col-md-6">
                  <div className="count-box">
                    <i className="bi bi-emoji-smile"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="232"
                      data-purecounter-duration="1"
                      className="purecounter"
                    ></span>
                    <p>{item.title}</p>
                    <h4>{item.value}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}
      {/* End Facts Section  */}

      {/* <!-- ======= Skills Section ======= --> */}
      <section id="skills" className="skills section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Skills</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row skills-content">
            {skill.map((item) => {
              return (
                <div className="  col-6 progress">
                  <span className="skill">
                    {item.name} <i className="val">{item.value}</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: item.width }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
