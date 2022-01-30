import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

class App extends Component {

  requestDevCheck() {
    axios.get('http://localhost:3001/devices/inUse')
    .then(response => {
      console.log('Got response: ', JSON.stringify(response.data));
      alert(`In use: ` + response.data.toString());
    })
    .catch(err => alert('Error checking devices: ' + err));
  }
  
  enumerateDevices() {
    let _lDevices = []
    navigator.mediaDevices.enumerateDevices()
    .then(function(devices) {
      devices.forEach(function(device) {
      _lDevices.push({'device-kind': device.kind, "device-label": device.deviceId});
      });
    alert(JSON.stringify(_lDevices));
    })
   .catch(function(err) {
     alert(err.name + ": " + err.message);
   });
  }



  render() {
    return (
      <div className="App">
        <h2>Are you in a meeting?</h2>
        <button onClick={this.enumerateDevices}>Find Devices!</button>
        <button onClick={this.requestDevCheck}>Check Devices!</button>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//export default App;
