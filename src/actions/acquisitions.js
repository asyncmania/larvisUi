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
        dispatch(addAquisition(acquisitions));
        console.log(getState());
      })
      .catch((error) => console.log(error));
  }
}
