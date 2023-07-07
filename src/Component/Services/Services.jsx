import React from "react";
import "./Services.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { service, testimonials } from "../../mock/mock";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Services = () => {
  return (
    <div>
      {" "}
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row">
            {service.map((data) => {
              return (
                <>
                  <div
                    className="col-lg-4 col-md-6 d-flex align-items-stretch"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <div className={`icon-box ${data.hoverColor}`}>
                      <div className="icon">
                        {data.iconBackground}

                        {data.icon}
                      </div>
                      <div className="text-center">
                        <h4>
                          <a href="">Lorem Ipsum</a>
                        </h4>
                        <p>
                          Voluptatum deleniti atque corrupti quos dolores et
                          quas molestias excepturi
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <section id="testimonials" className="testimonials section-bg">
        <Swiper
          style={{ width: "50%" }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Testimonials</h2>
            </div>
            {testimonials.map((data) => {
              return (
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img
                        src={data.image}
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>{data.name}</h3>
                      {data.designation}
                      {data.content}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </section>
    </div>
  );
};

export default Services;
