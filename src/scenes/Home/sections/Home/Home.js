import React from 'react';
import { Element } from 'react-scroll';
import { Container } from 'reactstrap';
import Welcome from './components/Welcome/Welcome';
import Menu from '../../components/Menu/Menu';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <Element id="home-section" className="home-section">
        <div id="pt" className="animation-canvas" />
        <Container id="welcome-container">
          <Welcome />
        </Container>
        <Menu />
      </Element>
    );
  }
}

export default Home;
