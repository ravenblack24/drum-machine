import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';

class RangeInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<input type="range" min="1" max="100" value={this.props.volume} onChange={this.props.changeHandler} className="rangeInput"/>
		);
	}
}

class Toggle extends React.Component {
	render() {
		return (
			<label className="switch">
				<input type="checkbox" />
				<span className="slider round"></span>
			</label>
		);
	}
}

class DrumPad extends React.Component{
	render() {
		return(
			<button className="drum-pad" id={this.props.id}>
				{this.props.value}
				<audio ref={this.props.ref} id={this.props.value} src={this.props.src} className="clip" />
			</button>
		);
	}
}

class DrumMachine extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			volume: 20,
			power: true,
			bank: true
		}
		this.changeVolume = this.changeVolume.bind(this);
	}
	changeVolume(e) {
		this.setState({ volume: e.target.value});
	}

	render() {
		return (
			<div className="container">
				<div className="drumpad-container">
					<DrumPad id={"SoundQ"} value={"Q"} src={"C:/Users/Karen/Documents/version-control/sounds/ching_gamelan.mp3"} />
					<DrumPad id={"SoundW"} value={"W"} src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3"} />
					<DrumPad id={"SoundE"} value={"E"} src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3"} />
					<DrumPad id={"SoundA"} value={"A"} src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3"} />
					<DrumPad id={"SoundS"} value={"S"} src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3"} />
					<DrumPad id={"SoundD"} value={"D"} src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3"} />
					<DrumPad id={"SoundZ"} value={"Z"} src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3"} />
					<DrumPad id={"SoundX"} value={"X"} src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3"} />
					<DrumPad id={"SoundC"} value={"C"} src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3"} />
				</div>
				<div id="control-container">
					<div id="powerBar">
						<div className="label">Power</div>
						<Toggle />
					</div>
					<div id="displayBar">
						<div id="display">test</div>
					</div>
					<div id="volumeBar">
						<RangeInput changeHandler={this.changeVolume} volume={this.state.volume}/>
					</div>
					<div id="bankBar">
						<div className="label">Bank</div>
						<Toggle />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
  <React.StrictMode>
  	<DrumMachine  />
  </React.StrictMode>,
  document.getElementById('root')
);

