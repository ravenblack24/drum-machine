import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const url = "https://s3.amazonaws.com/freecodecamp/drums/";
const mapping = {
	"Q": "Heater-1",
	"W": "Heater-2",
	"E": "Heater-3",
	"A": "Kick_n_Hat",
	"S": "Give_us_a_light",
	"D": "Dry_Ohh",
	"Z": "punchy_kick_1",
	"X": "Heater-6",
	"C": "side_stick_1"
}

class RangeInput extends React.Component {
	render() {
		return (
			<input type="range" min="0" max="1" step="0.1" value={this.props.volume} onChange={this.props.changeHandler} className="rangeInput" disabled={this.props.disabled}/>
		);
	}
}

class Toggle extends React.Component {
	render() {
		return (
			<label className="switch" >
				<input type="checkbox" checked={this.props.checked} onChange={this.props.changeHandler}/>
				<span className="slider round"></span>
			</label>
		);
	}
}

class DrumPad extends React.Component{
	constructor(props) {
		super(props);
		this.audio = React.createRef();
		this.playAudio = this.playAudio.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	componentDidMount(){
		document.addEventListener("keydown", this.handleKeyPress, false);
	}
	componentWillUnmount(){
		document.removeEventListener("keydown", this.handleKeyPress, false);
	}

	playAudio() {
		this.audio.current.play();
		this.audio.current.volume = this.props.volume;
		this.props.onPlay(this.props.value);
		this.audio.current.currentTime = 0;
	}

	handleKeyPress(event) {
		if(event.key.toUpperCase() === this.props.value) {
			this.playAudio();
		}
	}

	render() {
		return(
			<button className="drum-pad" id={this.props.id} onClick={this.playAudio} onKeyDown={this.handleKeyPress} disabled={this.props.disabled}>
				{this.props.value}
				<audio ref={this.audio} id={this.props.value} src={this.props.src} className="clip" />
			</button>
		);
	}
}

class DrumMachine extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			volume: 0.5,
			power: true,
			display: ""
		}
		this.changeVolume = this.changeVolume.bind(this);
		this.togglePower = this.togglePower.bind(this);
		this.updateDisplay = this.updateDisplay.bind(this);

	}

	changeVolume(e) {
		this.setState({ volume: e.target.value});
	}

	togglePower() {
		const pwr = this.state.power;
		this.setState({
			power: !pwr
		});
	}
	
	updateDisplay(key) {
		const regex = /-|_/g;
		const trackTitle = mapping[key].replace(regex , " ");
		this.setState({
			display: trackTitle
		})	
	}

	render() {
		return (
			<div className={!this.state.power ? `container-disabled container`: `container`}>
				<div className="drumpad-container">
					{Object.keys(mapping).map((item, i) => (
						<DrumPad id={"sound".concat(item)} key={i} value={item} src={url.concat(mapping[item]).concat(".mp3")} volume={this.state.volume} onPlay={this.updateDisplay} disabled={!this.state.power}/>
					))}
				</div>
				<div id="control-container">
					<div id="powerBar">
						<div className="label">Power</div>
						<Toggle changeHandler={this.togglePower} checked={this.state.power}/>
					</div>
					<div id="displayBar">
						<div id="display">{this.state.display}</div>
					</div>
					<div id="volumeBar">
						<RangeInput changeHandler={this.changeVolume} volume={this.state.volume} disabled={!this.state.power}/>
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

