import React, { Component } from 'react';
import { connect } from 'react-redux';
import Designer from './components/designer';
import { loadKeyboard } from './store/actions/keyboard';
import { getActiveKeyboard } from './store/selectors';
// import Dropzone from 'react-dropzone';
import './App.css';

class App extends Component {
  handleDrop = files => {
    if (files.length === 0) {
      return;
    };
    const file = files.shift();
    const reader = new FileReader();

    if (!file.type.match(/json/)) {
      return;
    }
    
    reader.onload = () => {
      const data = JSON.parse(reader.result);
      this.props.loadKeyboard(data);
    }
    reader.readAsText(file);
  }
  // <Dropzone className="App" onDrop={this.handleDrop} disableClick>
  // </Dropzone>

  render() {
    const { keyboard } = this.props;
    return (
      <div className="App">
        {keyboard && <Designer keyboard={keyboard} />}
      </div>
    );
  }
}

export default connect(
  state => ({
    keyboard: getActiveKeyboard(state)
  }),
  {
    loadKeyboard
  }
)(App);
