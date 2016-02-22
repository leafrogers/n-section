import React, { Component } from 'react';

class Row extends Component {

	render () {
		if (!this.props.components) {
			return null;
		}

		const classes = [
			'o-grid-row',
			this.props.isCompact ? 'o-grid-row--compact' : ''
		].filter(className => className);

		const renderComponents = (components) => components.map((component, index) =>
			<component.type {...component} items={this.props.items} key={'row-child_' + index} />
		);

		return (
			<div className={classes.join(' ')}>
				{renderComponents(this.props.components)}
			</div>
		);
	}
}

export default Row;
