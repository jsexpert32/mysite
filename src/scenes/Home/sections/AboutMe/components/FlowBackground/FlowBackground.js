import React from 'react';
import './FlowBackground.css';

class FlowBackground extends React.Component {
  render() {
    return (
      <div className="flow-background-container">
        <div
          id="flow-background"
          className="flow-background"
          ref={ref => (this.containerDiv = ref)}
        />
        <div className="children-container">{this.props.children}</div>
      </div>
    );
  }
}

export default FlowBackground;
