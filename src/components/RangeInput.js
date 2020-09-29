import React from 'react';

export default class RangeInput extends React.Component {
	render() {
		return (
			<input type="range" min="0" max="1" step="0.1" value={this.props.volume} onChange={this.props.changeHandler} className="rangeInput" disabled={this.props.disabled}/>
		);
	}
}
