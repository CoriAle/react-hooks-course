import React, { useEffect, useState, useContext, useReducer, useCallback, useMemo} from 'react';

import { Header } from '../src/Header';
import { Menu } from '../src/Menu';
import SpeakerDetail from './SpeakerDetail';
import { ConfigContext } from './App';
import { GlobalContext } from './GlobalState';

import useSpeakerDataManager  from './useSpeakerDataManager';

const Speakers = ({}) => {
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);
  const context = useContext(ConfigContext);

  //const [speakerList, setSpeakerList] = useState([]);

  //const { isLoading, speakerList, toggleSpeakerFavorite } = useSpeakerDataManager();
  const { isLoading, speakerList, toggleSpeakerFavorite, hasErrored, error } = useContext(GlobalContext);
  const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday);
  };

  const newSpeakerList = useMemo(() => speakerList
        .filter(
          ({ sat, sun }) =>
            (speakingSaturday && sat) || (speakingSunday && sun),
        )
        .sort(function (a, b) {
          if (a.firstName < b.firstName) {
            return -1;
          }
          if (a.firstName > b.firstName) {
            return 1;
          }
          return 0;
        }), 
      [speakerList, speakingSaturday, speakingSunday]
  );

  const speakerListFiltered = isLoading
    ? []
    : newSpeakerList;

  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday);
  };

  const heartFavoriteHandler = useCallback((e, speakerRec) => {
    e.preventDefault();
    // const sessionId = parseInt(e.target.attributes['data-sessionid'].value);
    // setSpeakerList(
    //   speakerList.map((item) => {
    //     if (item.id === sessionId) {
    //       return { ...item, favorite: favoriteValue };
    //     }
    //     return item;
    //   }),
    // );
    // dispatch({
    //   type: favoriteValue === true ? "favorite" : "unfavorite",
    //   id: sessionId,
    // });
    //console.log("changing session favorte to " + favoriteValue);
    toggleSpeakerFavorite(speakerRec);
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (hasErrored) return <di>Error: {error.message}</di>;

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="btn-toolbar  margintopbottom5 checkbox-bigger">
          
          {context.showSpeakerSpeakingDays === false ? null : (
            <div className="hide">
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSaturday}
                    checked={speakingSaturday}
                  />
                  Saturday Speakers
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSunday}
                    checked={speakingSunday}
                  />
                  Sunday Speakers
                </label>
              </div>
            </div>
          )}

        </div>
        <div className="row">
          <div className="card-deck">
            {newSpeakerList.map(
              (speakerRec) => {
                return (
                  <SpeakerDetail
                    key={speakerRec.id}
                    speakerRec={speakerRec}
                    onHeartFavoriteHandler={heartFavoriteHandler}
                  />
                );
              },
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
