import React, { useEffect, useReducer} from 'react';
import SpeakerData from './SpeakerData';
import speakersReducer from './speakersReducer';

function useSpeakerDataManager () {
    const [{isLoading, speakerList}, dispatch] = useReducer(
    speakersReducer, // This is the reducer called  with setSpeakerList
    {
      speakerList:[],
      isLoading: true
    }); // this is initial data
   
   function toggleSpeakerFavorite (speakerRec) {
     if(speakerRec.favorite === true) {
       dispatch({type: 'unfavorite', id: speakerRec.id});
     } else {
       dispatch({type: 'favorite', id: speakerRec.id});
       console.log(speakerRec);
     }
   }

  useEffect(() => {
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => {
      // const speakerListServerFilter = SpeakerData.filter(({ sat, sun }) => {
      //   return (speakingSaturday && sat) || (speakingSunday && sun);
      // });
      //setSpeakerList(speakerListServerFilter);
      dispatch({
        type: "setSpeakerList",
        data: SpeakerData,
      });
    });
    return () => {
      console.log('cleanup');
    };
  }, []); // [speakingSunday, speakingSaturday]);

  return { isLoading, speakerList, toggleSpeakerFavorite };

 }

 export default useSpeakerDataManager;