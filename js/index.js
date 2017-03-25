import React from 'react';
import {render} from 'react-dom';
import Cluster from  './components/clusters/Cluster';

class App extends React.Component {
  render () {
    return (
      <div><Cluster></Cluster></div>
    );
  }
}

render(<App></App>, document.getElementById('app'));
