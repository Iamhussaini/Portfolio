// src/components/Header/Header.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import CV from '../../Images/CV.jpeg'; // Assuming you have a CV file in your images folder

import { FaDownload, FaGithub, FaLinkedin, FaInstagram, FaBehance } from 'react-icons/fa';
import hussain from '../../Images/hussain.png';

const Header = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const navigate = useNavigate();
  return (
    <>
     

      <section className="hero-section" id="home">
        <div className={`hero-content ${animate ? 'animate-fade-slide' : ''}`}>
          <h2 className="animate-fade-slide-delay"><span className="green">M-HUSSAIN</span></h2>
          <h1 className="animate-fade-slide-delay2">Front-end Developer &<br />UI Designer</h1>
          <p className="animate-fade-slide-delay3">
            Front-end developer focused on creating Web and Mobile applications. <br />
            I really like different projects that solve real problems.
          </p>
          <div className="buttons animate-fade-slide-delay4">
            <div className='cv-image' style={{display: 'none'}}>
              <img src={CV} alt="CV" />
            </div>
            <button
              className="cv-btn"
              onClick={() => {
                // Download the CV image file
                const link = document.createElement('a');
                link.href = CV;
                link.download = 'CV.jpeg';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <FaDownload /> Download CV
            </button>
            <button
              className="portfolio-btn"
              onClick={() => navigate('/mycv')}
            >
              CV
            </button>
          </div>
          <div className="social-icons animate-fade-slide-delay5">
            <FaInstagram />
            <FaGithub />
            <FaLinkedin />
            <FaBehance />
          </div>
        </div>

        <div className={`hero-image ${animate ? 'animate-fade-slide-img' : ''}`}>
          <img src={hussain} alt="Developer" />
        </div>

        <style>
          {`
            html {
              scroll-behavior: smooth;
            }
            .animate-fade-slide {
              animation: fadeSlideIn 0.8s ease-out both;
            }
            .animate-fade-slide-delay {
              animation: fadeSlideIn 1s 0.2s ease-out both;
            }
            .animate-fade-slide-delay2 {
              animation: fadeSlideIn 1s 0.4s ease-out both;
            }
            .animate-fade-slide-delay3 {
              animation: fadeSlideIn 1s 0.6s ease-out both;
            }
            .animate-fade-slide-delay4 {
              animation: fadeSlideIn 1s 0.8s ease-out both;
            }
            .animate-fade-slide-delay5 {
              animation: fadeSlideIn 1s 1s ease-out both;
            }
            .animate-fade-slide-img {
              animation: fadeSlideInImg 1s 0.5s ease-out both;
            }
            @keyframes fadeSlideIn {
              from { opacity: 0; transform: translateY(40px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeSlideInImg {
              from { opacity: 0; transform: scale(0.8) translateY(40px); }
              to { opacity: 1; transform: scale(1) translateY(0); }
            }
          `}
        </style>
      </section>
    </>
  );
};

export default Header;
