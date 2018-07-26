import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import 'react-responsive-carousel/lib/styles/main.css';
import './PhotoGrid.css';
import PhotoGridFilter from '../PhotoGridFilter/PhotoGridFilter';

const Shuffle = window.Shuffle;
const projects = [
  {
    id: 0,
    image: 'ztorie',
    skills: 'VueJS + ReactJS + Laravel',
    groups: ['javascript', 'php'],
    title: 'Ztorie Widget Creator',
    isVisit: true,
    imageCounts: 4,
    titleDetail: 'alp.app.ztorie.com',
    subtitle: 'Ztorie Widget Creator',
    url: 'https://alp.app.ztorie.com',
    description:
      'Ztorie is like instagram story maker.  User can create any widget by adding video , image , texts , music , effects and move,drag,rotate elements and embed it to any website you want. '
  },
  {
    id: 1,
    image: 'quillon',
    skills: 'ReactJS + BlockExplore API',
    groups: ['javascript', 'nodejs'],
    title: 'Quillon',
    isVisit: true,
    imageCounts: 4,
    titleDetail: 'Quillon.co',
    subtitle: 'Quillon Marketing Portal',
    url: 'http://quillon.co',
    description:
      "Quillon Currency Marketing portal. This web portal is connected to the back-end BlockExplorer api. Used ReactJS, Redux, React-Redux, Redux-Sagga packages. I've also developed BlockExplorer"
  },
  {
    id: 2,
    image: 'howtube',
    skills: 'PHP + Javascript',
    groups: ['php'],
    title: 'Howtube',
    isVisit: true,
    imageCounts: 5,
    titleDetail: 'Howtube.com',
    subtitle: 'Video platform that contains wide range of topics',
    url: 'https://www.howtube.com/',
    description:
      'howtube is a video hosting platform that exists to help video creators of all shapes and sizes connect with audiences in the most authentic manner possible and appropriately monetize their content at the same time.'
  },
  {
    id: 3,
    image: 'TuftAndNeedle',
    skills: 'AngularJS + PHP',
    groups: ['php', 'javascript'],
    title: 'TuftAndNeedle',
    isVisit: true,
    imageCounts: 2,
    titleDetail: 'tuftandneedle.com',
    subtitle: 'Matress Site',
    url: 'https://www.tuftandneedle.com',
    description:
      'Tuft and Needle is set to do to the mattress business what Warby Parker did for eyewear. Used AngularJS for front-end and Laravel5 for back-end.'
  },
  {
    id: 4,
    image: 'Kordio',
    skills: 'NodeJS + ReactJS',
    groups: ['javascript', 'nodejs'],
    title: 'Kordio',
    isVisit: true,
    imageCounts: 2,
    titleDetail: 'kordio.com',
    subtitle: 'Decentralized e-commerce market platform',
    url: 'https://kordio.com',
    description:
      'Kordio connects you to your favorite merchants and gives you access to special rewards and discounts.'
  },
  {
    id: 5,
    image: 'shoponya',
    skills: 'PHP ',
    groups: ['php'],
    title: 'Shoponya',
    isVisit: true,
    imageCounts: 3,
    titleDetail: 'Shoponya.com',
    subtitle: '',
    url: 'https://www.shoponya.com/',
    description:
      'E-commerce market place to let you spend less time marketing and more time filling orders. Visual tag based search. Integrated stripe payment gateway.'
  },
  {
    id: 6,
    image: 'MedLearnity',
    skills: 'Vue.js + Laravel',
    groups: ['javascript', 'php'],
    title: 'Medical Learning Site',
    isVisit: false,
    imageCounts: 2,
    titleDetail: 'Medical Learning Site',
    url: '',
    description:
      'MedLearnity is medical learning site. Students can schedule lession and have a video-tutoring.'
  },
  {
    id: 7,
    image: 'limologs',
    skills: 'Ruby on Rails',
    groups: ['ruby'],
    title: 'Limologs',
    isVisit: true,
    imageCounts: 6,
    titleDetail: 'Limo Logs',
    url: 'https://www.limologs.com/',
    description:
      'Limo Logs has the ability to track all of your vehicles not just those that are DOT regulated, so when your drivers go from sedan to bus they can simply select their new vehicle. Used Ruby on Rails'
  },
  {
    id: 8,
    image: 'Conceptsauce',
    skills: 'KeyStoneJS + NodeJS',
    groups: ['javascript', 'nodejs'],
    title: 'Conceptsauce',
    isVisit: true,
    imageCounts: 1,
    titleDetail: 'Conceptsauce',
    url: 'https://conceptsauce.io',
    description:
      'Clients can be assured that the 3D Activity Platform is build by people with commercial experience.'
  },
  {
    id: 9,
    image: 'BeatThread',
    skills: 'Ruby on Rails + Javascript',
    groups: ['javascript', 'ruby'],
    title: 'BeatThread',
    isVisit: true,
    imageCounts: 2,
    titleDetail: 'BeatThread',
    url: 'https://beatthread.com/',
    description: 'Website for Musical Producers.'
  },
  {
    id: 10,
    image: 'Atlas',
    skills: 'Angular1.5 + ExpressJS',
    groups: ['javascript', 'nodejs'],
    title: 'Atlas Global',
    isVisit: true,
    imageCounts: 1,
    titleDetail: 'Atlas Global',
    url: 'http://atlas.infocabsglobal.com',
    description: 'Atlas Global is Job Site for engineers.'
  }
];

function Figure({ id, groups, imageName, title, skills, handleLearnMore }) {
  var suffix = '';
  if (process.env.NODE_ENV === 'production') {
    suffix = '/mysite';
  }
  const imgSrc = suffix + '/images/projects/' + imageName + '.png';

  const groupsJSON = JSON.stringify(groups);

  return (
    <div
      key={id}
      className="col-md-6 col-sm-6 col-lg-4 picture-item"
      data-groups={groupsJSON}
      data-title={title}
    >
      <div className="aspect aspect--16x9">
        <div className="aspect__inner">
          <img src={imgSrc} alt={title} />
        </div>
        <div className="picture-item-overlay" />
        <div className="picture-item-hover">
          <div className="picture-title">{title}</div>
          <div className="picture-skills">{skills}</div>
          <a
            className="learn-more"
            onClick={() => {
              handleLearnMore(id);
            }}
          >
            Learn More
          </a>
        </div>
      </div>
      <figcaption>{title}</figcaption>
    </div>
  );
}

class PhotoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDataID: 0,
      modal: false
    };
    this.onClickLearnMore = this.onClickLearnMore.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    this.shuffle = new Shuffle(this.element, {
      itemSelector: '.picture-item',
      sizer: this.sizer
    });
    window.projectShuffleContainer = this.shuffle;
  }
  onClickLearnMore(id) {
    this.setState({
      modalDataID: id
    });
    this.toggle();
  }
  render() {
    const detailModalImageCounts = projects[this.state.modalDataID].imageCounts;
    const imagePrefix = projects[this.state.modalDataID].image;
    var suffix = '';
    if (process.env.NODE_ENV === 'production') {
      suffix = '/mysite/';
    }
    let detailImages = [];
    const { titleDetail, subtitle, description, url } = projects[
      this.state.modalDataID
    ];
    for (let index = 0; index < detailModalImageCounts; index++) {
      detailImages.push(
        <div>
          <img
            alt=""
            src={
              suffix + 'images/projects/' + imagePrefix + '_' + index + '.png'
            }
          />
        </div>
      );
    }
    return (
      <React.Fragment>
        <PhotoGridFilter />
        <div
          className="row my-shuffle-container shuffle"
          ref={ref => (this.element = ref)}
        >
          {projects.map(project => (
            <Figure
              key={project.id}
              id={project.id}
              groups={project.groups}
              imageName={project.image}
              title={project.title}
              skills={project.skills}
              handleLearnMore={this.onClickLearnMore}
            />
          ))}
          <div
            ref={element => (this.sizer = element)}
            className="col-xs-1 col-sm-1 photo-grid__sizer"
          />
        </div>
        <Modal
          size="lg"
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="project-detail-modal"
        >
          <ModalBody>
            <Carousel>{detailImages}</Carousel>
            <div className="title">{titleDetail}</div>
            <div className="sub-title">{subtitle}</div>
            <div className="divider" />
            <div className="description">{description}</div>
          </ModalBody>
          <ModalFooter>
            <a
              href={url}
              className="visit-button"
              target="_blank"
              color="primary"
              onClick={this.toggle}
            >
              VISIT SITE
            </a>{' '}
            <Button color="secondary" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default PhotoGrid;
