import React from 'react';
import Portrait from './../assets/portrait.png';
import linkedin from './../assets/linkedinIcon.jpg'
import github from './../assets/githubIcon.jpg'
import './Footer.css'


const Footer: React.FC = () => {
  return (
    <div className="footer">
      <h1>Cassandra Olfert</h1>
      <h2>Second Year Computer Information Technology Student</h2>
      <img src={Portrait} className="portrait" alt="Cassandra" />
      <a href="https://www.linkedin.com/in/cassandra-olfert-9b5745177" target="blank" rel="noopener noreferrer">
        <img src={linkedin} className="icon" alt="LinkedIn Icon"></img>
      </a>
      <a href="https://github.com/olfertc" target="blank" rel="noopener noreferrer">
        <img src={github} className="icon" alt="Github Icon"></img>
      </a>
    </div>
  );
}

export default Footer;