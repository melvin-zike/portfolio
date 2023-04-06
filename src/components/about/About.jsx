import React from "react";
import "./about.css";
import Ab from "../../img/mario.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg"
            alt=""
            className="about-img"
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be able to read and
          understand the content of the application.
        </p>
        <p className="about-desc">
          It is a long established fact that a reader will be able to read and
          understand the content of the application. It is a long established
          fact that a reader will be able to read and understand the content of
          the application. It is a long established fact that a reader will be
          able to read and understand the content of the application.
        </p>
        <div className="about-cert">
          <img
            className="about-cert-img"
            src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg"
            alt=""
          />
          <div className="about-cert-text">
            <h4 className="about-cert-title">Reactjs front to back</h4>
            <p className="about-cert-desc">
              act that a reader will be able to read and understand the content
              of the application. It is a long established fact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
