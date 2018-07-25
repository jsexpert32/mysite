import React from 'react';
import PropTypes from 'prop-types';
import './Bullet.css';

class Bullet extends React.Component {
  render() {
    const iconClass = ['fa', this.props.iconName].join(' ');
    return (
      <div className="bullet fadeIn wow animated">
        <div className="circle-container">
          <i className={iconClass} />
        </div>
        <div className="bullet-title">{this.props.title}</div>
        <div className="bullet-description">{this.props.description}</div>
      </div>
    );
  }
}

Bullet.propTypes = {
  iconName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

export default Bullet;
