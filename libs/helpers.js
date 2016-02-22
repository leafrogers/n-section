const layoutNames = ['default', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

// turn { default: 12, XL: 2} into '12 XL2'
const colspan = config => {
	return layoutNames.reduce((colspan, breakpoint) => {
		if (config[breakpoint]) {
			const colspanPrefix = breakpoint !== 'default' ? breakpoint : '';
			colspan.push(colspanPrefix + config[breakpoint]);
		}
		return colspan;
	}, []).join(' ');
};

export default {
	colspan
}
