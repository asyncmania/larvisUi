import { startLoading, stopLoading } from "./loading";

export const ADD_ACQUISITIONS = "ADD_ACQUISITIONS";

function addAquisition(acquisitions) {
  return {
    type: ADD_ACQUISITIONS,
    payload: acquisitions,
  };
}

export default function fetchAcquisitions() {
  return (dispatch, getState, { dataCache }) => {
    dispatch(startLoading());
    fetch(`http://localhost:8080/acquisitions`, {
      headers: {
        Authorization: `Bearer ${getState().currentUser.token}`,
      },
    })
      .then((data) => data.json())
      .then((acquisitions) => {
        dispatch(stopLoading());
        const timestamps = acquisitions.map(time => new Date(time.timestamp * 1000).toLocaleDateString())
        const sites =  acquisitions.map(acquisition => acquisition.sites)
        dispatch(addAquisition({timestamps, sites}));
        console.log(getState());
      })
      .catch((error) => console.log(error));
  }
}
