import React from 'react';

class Cluster extends React.Component {

  getInitialState() {
    console.log("Component Initial State");
  }

  componentWillMount() {
  }

  render() {
    return (
      <div><h1>Clusters</h1></div>
    );
  }
}

export default Cluster;
