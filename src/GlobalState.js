import React from 'react';
import useSpeakerDataManager  from './useSpeakerDataManager';

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
	const { isLoading, speakerList, toggleSpeakerFavorite, incrementFavoriteClickCount, favoriteClickCount, } = useSpeakerDataManager();
 	
 	const provider =  { isLoading, speakerList, toggleSpeakerFavorite, incrementFavoriteClickCount, favoriteClickCount, };


	return( <GlobalContext.Provider value={provider}> {children}</GlobalContext.Provider>);
};