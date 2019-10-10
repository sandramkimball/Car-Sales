import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {setCar, setAddFeatures, setAddPrice, removeFeature} from './Actions/actions';

const App = () => {
  const state = useSelector((state)=>state)
  const dispatch = useDispatch();
     
  const removeFeature = item => {
    dispatch({type: 'REMOVE_FEATURE', payload: item})
  };

  const addFeature = item => {
    dispatch({type: 'ADD_FEATURE', payload: item})
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} addFeature = {addFeature}/>
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

// const mapStateToProps = state => {
//   console.log('App.js, State:', state);
//   return {
//     car: state.car.car,
//     price: state.car.price,
//     name: state.car.name,
//     image: state.car.image,
//     features: state.car.features,
//     additionalPrice: state.car.additionalPrice,
//     additionalFeatures: state.car.additionalFeatures,
//   }
// };

// export default connect(
//   mapStateToProps,
//   {setCar, setAdditionalPrice}
// )(App);


export default App;


// additionalPrice: 0,
//     car: {
//       price: 26395,
//       name: '2019 Ford Mustang',
//       image:
//         'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
//       features: []
//     },
//     additionalFeatures: [
//       { id: 1, name: 'V-6 engine', price: 1500 },
//       { id: 2, name: 'Racing detail package', price: 1500 },
//       { id: 3, name: 'Premium sound system', price: 500 },
//       { id: 4, name: 'Rear spoiler', price: 250 }
//     ]
//   };