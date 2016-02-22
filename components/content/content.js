import React, { Component } from 'react';
import { ConceptCard } from '@financial-times/n-card';

const getImageData = item => {
	if (item.branding && item.branding.taxonomy === 'authors' && item.branding.headshot) {
		return { imageServiceUrl: item.branding.headshot, isHeadshot: true };
	} else if (item.primaryImage && item.primaryImage.rawSrc) {
		return { url: (item.primaryImage && item.primaryImage.rawSrc) }
	}
	return null;
};

// turn a 16:9 srcSet into squares
const squareifyImage = srcSet =>
	Object.keys(srcSet).reduce((srcSet, breakpoint) => {
		srcSet[breakpoint] = Math.ceil(srcSet[breakpoint] * .5625);
		return srcSet;
	}, srcSet);

const getData = (item, opts) => {
	const data = {
		size: opts.size,
		show: opts.show,
		isTransparent: opts.isTransparent,
		isNew: opts.isNew
	};

	Object.assign(data, {
		type: 'concept',
		id: item.id,
		name: item.name,
		items: item.items,
		taxonomy: item.taxonomy,
		url: item.url,
		isFollowing: item.isFollowing
	});

	return data;
};

class Content extends Component {
	render () {
		const item = this.props.items[typeof this.props.itemIndex !== 'undefined' ? this.props.itemIndex : this.props.id];
		if (!item) {
			return null;
		}
		const data = getData(item, this.props);
		return <ConceptCard {...data} />;
	}
}

export default Content;
