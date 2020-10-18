import React from 'react';
import Toggle from './Toggle';
import DrumPad from './DrumPad';
import RangeInput from './RangeInput';
import {Helmet} from "react-helmet";

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

/**
 * Description of component purpose
 */
export default class DrumMachine extends React.Component {
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

	/**
	 * Description
	 * 
	 * @param e 
	 * 
	 * @returns void
	 */
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
			<React.Fragment>
				<Helmet>
	            	<meta charSet="utf-8" />
	            	<title>Drum Machine - React js app</title>
	            	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
	        	</Helmet>
				<a href="https://github.com/ravenblack24/drum-machine"><img loading="lazy" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_left_darkblue_121621.png?resize=149%2C149" class="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1"/></a>
				<div className={!this.state.power ? `container-disabled container`: `container`} id="drum-machine">
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
			</React.Fragment>
		);
	}
}