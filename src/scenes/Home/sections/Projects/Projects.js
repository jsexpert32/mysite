import React from 'react';
import { Container } from 'reactstrap';
import { Element } from 'react-scroll';
import PhotoGrid from './components/PhotoGrid/PhotoGrid';
import './Projects.css';

const wowInit = window.wowInit;
const defaultDelay = window.defaultDelay;

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bShow: false
    };

    this.showComponent = this.showComponent.bind(this);
  }

  showComponent() {
    this.setState({
      bShow: true
    });
    window.dispatchEvent(new Event('resize'));
    wowInit();
  }

  componentDidMount() {
    setTimeout(this.showComponent, defaultDelay);
  }

  render() {
    let hideOrShow = 'hidden';
    if (this.state.bShow === true) {
      hideOrShow = '';
    }

    return (
      <Element
        id="projects-section"
        className={['projects-section', hideOrShow].join(' ')}
      >
        <Container>
          <div className="title wow bounceInLeft animated">Projects</div>
          <div className="title-bar wow bounceInLeft animated" />
          <PhotoGrid />
        </Container>
      </Element>
    );
  }
}

export default Projects;
