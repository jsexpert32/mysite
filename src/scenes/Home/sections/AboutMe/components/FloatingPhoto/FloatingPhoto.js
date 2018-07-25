import React from 'react';
import './FloatingPhoto.css';
import me from './images/me.jpg';

class FloatingPhoto extends React.Component {
  render() {
    return (
      <div className="floating-photo">
        <a>
          <img src={me} alt="ME" />
        </a>
      </div>
    );
  }
}

export default FloatingPhoto;
