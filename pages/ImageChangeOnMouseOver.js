import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver'
const ImageChangeOnMouseOver = () => {
	
	return (
		<div>
			<ImageToggleOnMouseOver
				primaryImg="/static/speakers/bw/Speaker-10803.jpg" 
				secondaryImg="/static/speakers/Speaker-10803.jpg" 
				alt=""/>
			&nbsp;&nbsp;&nbsp;
			<ImageToggleOnMouseOver
				primaryImg="/static/speakers/bw/Speaker-10808.jpg" 
				secondaryImg="/static/speakers/Speaker-10808.jpg" 
				alt=""/>
		</div>
	)
}

export default ImageChangeOnMouseOver;