import React from 'react';
import HoverButton from '../../../../components/HoverButton/HoverButton';
import './Welcome.css';

class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome-component">
        <div id="typist-container" className="typist-container">
            <span className="title">
              Hello, I'm <span className="highlight">ShaoRun Zhang.</span>
            </span>
            <br />
            <span className="title">Full-stack Developer , Team Leader</span>
            <br />
            <span className="quote">
              Measuring programming progress by lines of code is like 
              <br />
              measuring aircraft building progress by weight. - Bill Gates
            </span>
        </div>
        <div className="button-container showAfter10Secs">
          <HoverButton targetID="projects-section" label="View my work" />
          <HoverButton targetID="contact-section" label="Hire me" />
        </div>
      </div>
    );
  }
}

export default Welcome;
