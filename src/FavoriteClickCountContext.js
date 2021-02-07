import React, {useContext, useMemo} from 'react';
import {GlobalContext}  from './GlobalState';

export const FavoriteClickCountContext = React.createContext();

//To avoid every detail re render every time we call incrementFavorite inside some Speaker detail component
export const FavoriteClickCountProvider = ({ children }) => {
	const { incrementFavoriteClickCount} = useContext(GlobalContext);
 	
 	const provider =  useMemo(() => { return { incrementFavoriteClickCount }; }, []);


	return( <FavoriteClickCountContext.Provider value={provider}> {children}</FavoriteClickCountContext.Provider>);
};