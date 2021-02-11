import React from 'react';
import useSpeakerDataManager  from './useSpeakerDataManager';

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
	const { isLoading,
		speakerList,
		toggleSpeakerFavorite,
		incrementFavoriteClickCount,
		favoriteClickCount,
		hasErrored, 
		error,
} = useSpeakerDataManager();
 	
 	const provider =  { isLoading,
 		speakerList,
	 	toggleSpeakerFavorite,
	 	incrementFavoriteClickCount,
	 	favoriteClickCount,
	 	hasErrored, 
	 	error,
 };


	return( <GlobalContext.Provider value={provider}> {children}</GlobalContext.Provider>);
};