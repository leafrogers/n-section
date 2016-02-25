import React, { Component } from 'react';

class SectionMeta extends Component {
	render () {
		return (
			<header className="section-meta">
				{ this.props.date ? <p className="section-meta__date">{this.props.date}</p> : null }
				<h2 className="section-meta__title" dangerouslySetInnerHTML={{ __html: this.props.title }} />
			</header>
		);
	}
}

export default SectionMeta;
