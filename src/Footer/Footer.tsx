import React from 'react';
import Linkedin from './../assets/linkedinIcon.jpg'
import Github from './../assets/githubIcon.jpg'
import './Footer.scss'


const Footer: React.FC = () => {
  return (
    <div className="footer">
      <a href="https://www.linkedin.com/in/cassandra-olfert-9b5745177" target="blank" rel="noopener noreferrer">
        <img src={Linkedin} className="icon" alt="LinkedIn Icon"></img>
      </a>
      <a href="https://github.com/olfertc" target="blank" rel="noopener noreferrer">
        <img src={Github} className="icon" alt="Github Icon"></img>
      </a>
    </div>
  );
}

export default Footer;