import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import './HoverButton.css';

class HoverButton extends React.Component {
  render() {
    const { label, targetID } = this.props;

    return (
      <Link
        to={targetID}
        className="hover-button"
        spy={true}
        smooth={true}
        duration={500}
      >
        {label}
        <i className="icon fa fa-angle-right" />
      </Link>
    );
  }
}

HoverButton.propTypes = {
  label: PropTypes.string,
  targetID: PropTypes.string
};

export default HoverButton;
