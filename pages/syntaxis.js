import React, { useEffect, useState } from 'react';

const Syntaxis = () => {
	const [checkBoxValue, setCheckBoxValue] = useState(false);

	useEffect(() => {
		console.log('In use effect');
		return(() => {
			console.log('In use effect Cleanup');
		}, [checkBoxValue]);
	});
	return (
		<div>
		
		</div>
	)
}

export default Syntaxis;