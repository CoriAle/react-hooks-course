import React, { useRef, useEffect, useState } from 'react';

const ImageToggleOnScroll = ({primaryImg, secondaryImg}) => {
	const imageRef = useRef(null);
	const [inView, setInView] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const isInView = () => {
		const rect = imageRef.current.getBoundingClientRect();
		return rect.top >= 0 && rect.bottom <= window.innerHeight;
	};

 	useEffect(()  => {
 		setIsLoading(false);
 		setInView(isInView());
		window.addEventListener("scroll", scrollHandler);
		return () => {
			window.removeEventListener("scroll", scrollHandler);
		}; // This happens on component will unmount

	}, []); // It only happens on component did mount.

	const scrollHandler = () => {
		setInView(isInView());
	};

	return (
		<div>
			<img
				src={ 
					isLoading ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
					: inView ? primaryImg: secondaryImg
				}
				alt=""
				ref={imageRef}/>
		</div>
	)
}

export default ImageToggleOnScroll;

//imageRef.current.src = primaryImg;