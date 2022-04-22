import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://github.com/theartificialguy"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>

      <a
        href="https://www.instagram.com/yashkelkar.99/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default SocialMedia;
