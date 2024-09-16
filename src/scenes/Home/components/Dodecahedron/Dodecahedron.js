import React from 'react';
import LetterE from '../../../../assets/images/LetterE.png';
import './Dodecahedron.css';

class Dodecahedron extends React.Component {
  render() {
    return (
      <div className="dodecahedron-container showAfter10Secs">
        <div className="view">
          <div className="LetterE neon">E</div>
          <div className="plane main">
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
          </div>
        </div>
      </div>
    );
  }
}

export default Dodecahedron;
