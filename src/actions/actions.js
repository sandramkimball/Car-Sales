// ACTION CREATERS: function that creates actions! (return action objects).
// ACTION TYPES: variables containing the action type strings.
// ACTIONS: objects that describe to reducer what event occured and how to update the state.

// export const SET_CAR = 'SET_CAR';
// export const setCar = (car) => ({type: SET_CAR, payload: car});

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = item => ({type: REMOVE_FEATURE, payload: item});

export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature = item => ({type: ADD_FEATURE, payload: item});

