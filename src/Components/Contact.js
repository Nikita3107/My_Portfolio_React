import React from "react";
import { SiLeetcode } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icons"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <a href="https://www.linkedin.com/in/nikitapatidar/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a
            href="mailto:patidarnikita826@gmail.com"
            target="_blank"
            className="items"
          >
            <CiMail className="icons" />
          </a>
          <a href="https://x.com/niki51701" target="_blank" className="items">
            <FaXTwitter className="icons" />
          </a>
          <a href="https://github.com/Nikita3107" target="_blank" className="items">
            <FaGithub className="icons" />
          </a>
          <a
            href="https://leetcode.com/u/Nikitapatidar_12/"
            target="_blank"
            className="items"
          >
            <SiLeetcode className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
