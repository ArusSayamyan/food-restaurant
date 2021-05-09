import types from "./types"

export const setModalState = (isShown) => ({
    type: types.SET_MODAL_STATE,
    payload: isShown,
  });