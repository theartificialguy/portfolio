import React, { useState, useEffect } from "react";
// import ReactToolTip from "react-tooltip";
import { motion } from "framer-motion";
import { AppWrapper, MotionWrapper } from "../../wrapper";
import { client, urlFor } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  // const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const skillsQuery = `*[_type == "skills"]`;
    // const expQuery = `*[_type == "experiences"]`;

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });

    // client.fetch(expQuery).then((data) => {
    //   setExperiences(data);
    // });
  }, []);

  return (
    <>
      <h2 className="head-text">
        Skills & <span>Technologies</span> I'm good at
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>

              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.div className="app__skills-exp">
          {experiences?.works?.map((work) => (
            <>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-exp-work"
                data-tip
                data-for={work.name}
                key={work.name}
              >
                <h4 className="bold-text">{work.name}</h4>
                <p className="p-text">{work.company}</p>
              </motion.div>

              <ReactToolTip
                id={work.name}
                effect="solid"
                arrowColor="#fff"
                className="skills-tooltip"
              >
                {work.desc}
              </ReactToolTip>
            </>
          ))}
        </motion.div> */}
      </div>
    </>
  );
};

export default AppWrapper(
  MotionWrapper(Skills, "app__skills"),
  "skills",
  "app__primarybg"
);
