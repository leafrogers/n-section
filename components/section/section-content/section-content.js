import React, { Component } from 'react';

import Content from '../../content/content';

// assign an incremental id to the Content components
const assignContentId = (contentIndex, component) => {
	if (component.type === Content) {
		component.id = contentIndex++;
	} else if (component.components && component.components.length) {
		contentIndex = component.components.reduce(assignContentId, contentIndex);
	}

	return contentIndex;
};


const renderComponents = (id, components, items) => components.map((component, index) =>
	<component.type {...component} items={items} key={`${id}_child${index}`} />
);

export default class SectionContent extends Component {
	render () {
		const items = this.props.items.slice();
		const components = this.props.layout;
		components.reduce(assignContentId, 0);

		return (
			<div>
				{renderComponents(this.props.id, components, items)}
			</div>
		)
	}
}
