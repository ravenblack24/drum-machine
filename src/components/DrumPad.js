import React from 'react';

export default class DrumPad extends React.Component {
	constructor(props) {
		super(props);
		this.audio = React.createRef();
		this.playAudio = this.playAudio.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.state = {
			activeStyle: ""
		}
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

		setTimeout(() => {
			this.setState({
				activeStyle: ""
			})
		}, 100);
	}

	handleKeyPress(event) {
		if(event.key.toUpperCase() === this.props.value) {
			this.setState({
				activeStyle: " drum-pad--active"
			});
			this.playAudio();
		}
	}

	render() {
		return(
			<button className={"drum-pad" +this.state.activeStyle} id={this.props.id} onClick={this.playAudio} onKeyDown={this.handleKeyPress} disabled={this.props.disabled}>
				{this.props.value}
				<audio ref={this.audio} id={this.props.value} src={this.props.src} className="clip" />
			</button>
		);
	}
}