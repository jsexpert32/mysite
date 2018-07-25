import React from 'react';
import { Link } from 'react-scroll';
import './menu.css';
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.onClickMenu = this.onClickMenu.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.checkMenu = this.checkMenu.bind(this);
    this.state = {
      menuOpen: false,
      bShowMenu: false
    };
  }

  onClickMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  checkMenu() {
    const offset = 1000;
    if (window.scrollY > offset && !this.stNav.classList.contains('is-fixed')) {
      this.setState({ bShowMenu: true });
    } else if (window.scrollY <= offset) {
      this.setState({ bShowMenu: false, menuOpen: false });
    }
  }

  onScroll() {
    this.checkMenu();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    let navTrigger = '',
      navUI = '';
    let stNav = '';
    if (this.state.menuOpen) {
      navTrigger = 'st-nav-trigger menu-is-open';
      navUI = 'is-visible';
    } else {
      navTrigger = 'st-nav-trigger';
    }

    if (this.state.bShowMenu) {
      stNav = 'is-fixed';
    } else {
      navUI = '';
    }

    return (
      <React.Fragment>
        <span
          className="skype-button bubble skype-button-position showAfter10Secs"
          data-contact-id="live:developer1215"
        />
        <div
          id="st-nav"
          ref={stNav => {
            this.stNav = stNav;
          }}
          className={stNav}
        >
          <a className={navTrigger} onClick={this.onClickMenu}>
            Menu<span> </span>
          </a>

          <nav
            id="st-main-nav"
            ref={stMainNav => {
              this.stMainNav = stMainNav;
            }}
          >
            <div className="navUIContainer">
              <ul
                ref={navUl => {
                  this.navUl = navUl;
                }}
                className={navUI}
              >
                <li>
                  <Link
                    to="home-section"
                    className="page-scroll hvr-underline-from-center"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="about-section"
                    className="page-scroll hvr-underline-from-center"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    About Me
                  </Link>
                </li>
                <li>
                  <Link
                    to="projects-section"
                    className="page-scroll hvr-underline-from-center"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact-section"
                    className="page-scroll hvr-underline-from-center"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
