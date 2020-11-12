import { showError } from "./error";
import { startLoading, stopLoading } from "./loading";

export const ADD_ACQUISITIONS = "ADD_ACQUISITIONS";

function addAquisition(acquisitions) {
  return {
    type: ADD_ACQUISITIONS,
    payload: acquisitions,
  };
}

export default function fetchAcquisitions() {
  return (dispatch, getState, { dataCache, http }) => {
    const acquisitions = dataCache.data["acquisitions"] || [];
    if (acquisitions.length) return dispatch(addAquisition(acquisitions));

    dispatch(startLoading());
    http.getData('/acquisitions', getState().currentUser.token)
      .then((acquisitions) => {
        dispatch(stopLoading());
        dispatch(addAquisition(acquisitions));
        dataCache.store({
          key: "acquisitions",
          value: acquisitions,
        });
      })
      .catch((error) => dispatch(showError()));
  }
}
