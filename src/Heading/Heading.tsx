import React from 'react';
import Portrait from './../assets/portrait.png';

const Header: React.FC = () => {
  return (
    <div>
      <h1>Cassandra Olfert</h1>
      <h2>Second Year Computer Information Technology Student</h2>
      <img src={Portrait} className="portrait" alt="Cassandra" />
    </div>
  );
}

export default Header;