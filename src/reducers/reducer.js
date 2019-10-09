import {SET_CAR, SET_ADDITIONAL_FEATURES, SET_ADDITIONAL_PRICE, REMOVE_FEATURE} from '../actions/actions';

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 0,
      name: '',
      image: '',
      features: []},

    additionalFeatures: [
      { id: 0,
        name: '', 
        price: 0 }],
  };

export const Reducer = (state = initialState, action) => {
    console.log(action, state);
    switch (action.type){

        case SET_CAR:
            return{
                car:{
                    ...state,
                    price: action.payload,
                    name: action.payload,
                    image: action.payload,
                    features: [...state.features, {features: action.payload}]
                }
            }

        case SET_ADDITIONAL_FEATURES:
            return{
                additionalFeatures:{
                    ...state,
                    id: Date.now(),
                    name: action.payload,
                    price: action.payload,
                }
            }

        case SET_ADDITIONAL_PRICE:
            return{
                additionalPrice:{
                    ...state,
                    additionalPrice: action.payload,
                }
            }

        case REMOVE_FEATURE:
                return{...state, features: state.features.filter(features=> !features.select)};

        
        // case BUY_ITEM:
        //     return{
        //         ...state
        //     };

        default: 
        return state;
    }
}