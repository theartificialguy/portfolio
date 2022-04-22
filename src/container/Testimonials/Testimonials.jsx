import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrapper, MotionWrapper } from "../../wrapper";
import { client, urlFor } from "../../client";
import "./Testimonials.scss";

const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const brandsQuery = `*[_type == "brands"]`;
    const testimonialsQuery = `*[_type == "testimonials"]`;

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });

    client.fetch(testimonialsQuery).then((data) => {
      setTestimonials(data);
    });
  }, []);

  const handleClick = (idx) => {
    setCurrIndex(idx);
  };

  const _testimonial = testimonials[currIndex];

  return (
    <>
      {testimonials.length > 0 ? (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(_testimonial.imgurl)} alt="testimonial" />

            <div className="app__testimonial-content">
              <p className="p-text">{_testimonial.feedback}</p>
              <div>
                <h4 className="bold-text">{_testimonial.name}</h4>
                <h5 className="p-text">{_testimonial.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currIndex === 0 ? testimonials.length - 1 : currIndex - 1
                )
              }
            >
              <HiChevronLeft className="app__testimonial-icon" />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currIndex === testimonials.length - 1 ? 0 : currIndex + 1
                )
              }
            >
              <HiChevronRight className="app__testimonial-icon" />
            </div>
          </div>
        </>
      ) : (
        <h2 className="head-text">
          No <span>Testimonials</span> yet 👨‍💻
        </h2>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.length > 0 ? (
          brands.map((brand) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, type: "tween" }}
              key={brand._id}
            >
              <img src={urlFor(brand.imgUrl)} alt={brand.name} />
            </motion.div>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default AppWrapper(
  MotionWrapper(Testimonials, "app__testimonial"),
  "testimonials",
  "app__primarybg"
);
