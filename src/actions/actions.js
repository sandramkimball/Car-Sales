// ACTION CREATERS: function that creates actions! (return action objects).
// ACTION TYPES: variables containing the action type strings.
// ACTIONS: objects that describe to reducer what event occured and how to update the state.

export const SET_CAR = 'SET_CAR';
export const setCar = (car) => ({type: SET_CAR, payload: car});

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = features => ({type: REMOVE_FEATURE, payload: features});

export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature = additionalFeatures => ({type: ADD_FEATURE, payload: additionalFeatures});

export const SET_ADDITIONAL_PRICE = 'SET_ADDITIONAL_PRICE';
export const setAdditionalPrice = additionalPrice => ({type: SET_ADDITIONAL_PRICE, payload: additionalPrice});