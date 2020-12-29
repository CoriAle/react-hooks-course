import React, { useState, useEffect } from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll'
const ImageChangeOnScroll = () => {
	
	const [currentSpeakerId, setCurrentSpeakerId] = useState(0);
	const [mouseEventCtn, setMouseEventCtn] = useState(0);

	useEffect(() => {
		window.document.title = `Speaker id:  ${currentSpeakerId}`;
		console.log(`UseEffect setting the title to:  ${currentSpeakerId}`)
	}, [currentSpeakerId]); //Fires only when currentSpeakerId value changes
	return (
		<div>
			<span>mouseEventCtn: {mouseEventCtn}</span>
			{[1124, 187, 823, 1269, 1538].map(speakerId => {
				return (
				<div
					key={speakerId}
					onMouseOver={() => {
						setCurrentSpeakerId(speakerId);
						setMouseEventCtn(mouseEventCtn + 1);
						console.log(`OnMouseOver ${speakerId}`);
					}}>
					<ImageToggleOnScroll
						primaryImg={`/static/speakers/Speaker-${speakerId}.jpg`} 
						secondaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`} 
						alt=""/>
				</div>);
			})

			}
		</div>
	)
}

export default ImageChangeOnScroll;