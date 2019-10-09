// ACTION CREATERS: function that creates actions! (return action objects).
// ACTION TYPES: variables containing the action type strings.
// ACTIONS: objects that describe to reducer what event occured and how to update the state.

export const SET_CAR = 'SET_CAR';
export const setCar = () => ({type: SET_CAR, payload: car});

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = () => ({type: REMOVE_FEATURE, payload: features});

export const SET_ADDITIONAL_FEATURES = 'SET_ADDITIONAL_FEATURES';
export const setAddFeatures = () => ({type: SET_ADDITIONAL_FEATURES, payload: AdditionalFeatures});

export const SET_ADDITIONAL_PRICE = 'SET_ADDITIONAL_PRICE';
export const setAddPrice = () => ({type: SET_ADDITIONAL_PRICE, payload: additionalPrice});