import React from 'react';
import Heading from './Heading/Heading';
import Footer from './Footer/Footer'
import './App.scss';


const App: React.FC = () => {
  return (
    <div className="profile">
      <Heading />
      <Footer />
    </div>
  );
}

export default App;
