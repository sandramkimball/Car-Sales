import {SET_CAR, ADD_FEATURE, SET_ADDITIONAL_PRICE, REMOVE_FEATURE} from '../Actions';

export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
          'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
      },
      store: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const rooterReducer = (state = initialState, {type, payload}) => {
    console.log(type, state);
    switch (type){

        case SET_CAR:
            return{
                car:{
                    ...state,
                    price: state.price,
                    name: state.name,
                    image: state.image,
                    features: [
                        ...state.car.features]
                }
            }

        case ADD_FEATURE:
            return{
                    ...state,
                    car: {
                        ...state.car, features: [
                            ...state.car.features, payload
                        ]
                    }
                }

        case SET_ADDITIONAL_PRICE:
            return{
                additionalPrice:{
                    ...state,
                    additionalPrice: state.additionalPrice,
                }
            }

        case REMOVE_FEATURE:
                return{...state, car: {
                    ...state.car, 
                    features: state.car.features.filter(features=> features.id !== payload.id)
                }
            };

        default: 
            return state;
    }
}