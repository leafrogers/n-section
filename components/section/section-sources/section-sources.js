import React, { Component } from 'react';

class SectionSources extends Component {
	render () {
		const options = this.props.sources.map(source =>
			<option key={source.title} value={source.uuid}>{source.title}</option>
		);

		return (
			<div className="section-sources n-util-hide-core">
				<label className="section-sources__label">{this.props.description}</label>
				<select className="section-sources__select" defaultValue={this.props.selected}>
					{options}
				</select>
			</div>

		);
	}
}

export default SectionSources;
