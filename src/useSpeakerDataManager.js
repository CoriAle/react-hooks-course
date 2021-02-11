import React, { useEffect, useReducer} from 'react';
import SpeakerData from './SpeakerData';
import speakersReducer from './speakersReducer';
import axios from 'axios';

function useSpeakerDataManager () {
    const [{
      isLoading, 
      speakerList, 
      favoriteClickCount,
      hasErrored,
      error,
    }, dispatch] = useReducer(
    speakersReducer, // This is the reducer called  with setSpeakerList
    {
      speakerList:[],
      isLoading: true,
      favoriteClickCount: 0,
      hasErrored: false,
      error: null,
    }); // this is initial data
   
   function toggleSpeakerFavorite (speakerRec) {
      const updateData = async function () {
       try {
         axios.put(`http://localhost:4000/speakers/${speakerRec.id}`, speakerRec);
         speakerRec.favorite === true 
         ? dispatch({type: 'unfavorite', id: speakerRec.id})
         : dispatch({type: 'favorite', id: speakerRec.id});
       } catch(e) {
         // statements
         dispatch({type: 'errored', error: e});
       }
     };
     updateData();
   }

   function incrementFavoriteClickCount() {
     dispatch({ type: 'incrementFavoriteClickCount' });
   }

  useEffect(() => {
    const fetchData = async function () {
      try {
        let result = await axios.get('http://localhost:4000/speakers');
        dispatch({ type: 'setSpeakerList', data: result.data });
      } catch (e) {
        dispatch({ type: 'errored', error: e });
      }
    };
    fetchData();

    return () => {
      console.log('cleanup');
    };
  }, []);

  return {
    isLoading,
    speakerList,
    toggleSpeakerFavorite,
    incrementFavoriteClickCount,
    favoriteClickCount,
    hasErrored,
    error,
  };

 }

 export default useSpeakerDataManager;