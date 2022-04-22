import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import ReactToolTip from "react-tooltip";
import { images } from "../../constants";
import { AppWrapper, MotionWrapper } from "../../wrapper";

const imageData = [
  {
    id: "react",
    img: images.react,
    desc: "ReactJs, React Native, Redux, React Hooks",
  },
  {
    id: "py",
    img: images.python,
    desc: "Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Flask",
  },
  {
    id: "js",
    img: images.javascript,
    desc: "NodeJs, ExpressJs, MongoDB, Firebase, MERN Stack",
  },
];

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        className="app__header-info"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Yash</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text" style={{ fontWeight: "bold" }}>
              With Great Power comes
            </p>
            <p className="p-text" style={{ fontWeight: "bold" }}>
              Great Responsibilities
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="app__header-img"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2, delayChildren: 0.5 }}
      >
        <motion.img
          src={images.ai}
          alt="profile"
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        {/* <motion.img
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
        /> */}
      </motion.div>

      <motion.div
        className="app__header-circles"
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
      >
        {imageData.map((data) => (
          <>
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__flex"
              data-tip
              data-for={data.id}
              key={data.id}
            >
              <img src={data.img} alt="circle" />
            </motion.div>

            <ReactToolTip
              id={data.id}
              effect="float"
              arrowColor="#e94560"
              place="right"
              className="skills-tooltip"
            >
              {data.desc}
            </ReactToolTip>
          </>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrapper(
  MotionWrapper(Header, "app__home"),
  "home",
  "app__primarybg"
);
