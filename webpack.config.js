const path = require('path');

module.exports = {
	mode: 'production',
	entry: {
		'main': './index.js',
		'extra': './index.js'
	},
	output: {
		path: path.resolve(__dirname, 'build'),
	},
	resolve: {
		symlinks: false
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			name: 'main',
			minSize: 0
		},
		runtimeChunk: {
			name: 'main'
		},
		minimize: false
	}
};
