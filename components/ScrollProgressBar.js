// components/ScrollProgressBar.js
import React from 'react';

import ProgressBar from "react-scroll-progress-bar"; //Add this line

export default class App extends React.Component {
  render() {
      return (
          <div style={{ position:'relative',width: '100%' }}>
              <ProgressBar style={{ position: 'absolute', width: '100%' }} bgcolor="#0070f3"   />
              
          </div>
      );
  }
}

