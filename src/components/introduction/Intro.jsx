import React from "react";
import "./intro.css";
import Me from "../../img/me1.png";
import { GitHub, LinkedIn, Twitter, Instagram } from "@material-ui/icons";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrap">
          <h2 className="intro-text">Hi, my name is</h2>
          <h1 className="intro-name">Melvin Nwaezike</h1>
          <div className="intro-title">
            <div className="intro-title-wrap">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">Frontend Developer</div>
              <div className="intro-title-item">Blockchain Developer</div>
              <div className="intro-title-item">Graphics Designer</div>
            </div>
          </div>
          <p className="into-desc">
            I design and develop service and apps and specialize in creating
            modern day websites and online stores
          </p>
          <button className="intro-btn">Contact Me</button>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-bg"></div>
        <img src={Me} alt="" className="intro-image" />
        <div className="intro-scroll">
          <a
            href="https://www.github.com/melvin-zike"
            target="_blank"
            className="intro-socials"
          >
            <GitHub className="shareIcon" />
          </a>
          <a
            href="https://www.linkedin.com/in/melvin-nwaezike/"
            target="_blank"
            className="intro-socials"
          >
            <LinkedIn className="shareIcon" />
          </a>
          <a href="https://www.twitter.com/mnwaezike" className="intro-socials">
            <Twitter className="shareIcon" />
          </a>
          <a href="#" className="intro-socials">
            <Instagram className="shareIcon" />
          </a>
        </div>
        {/* <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="intro-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg> */}
      </div>
    </div>
  );
};

export default Intro;
