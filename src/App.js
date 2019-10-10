import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const App = () => {
  const {car, store, additionalPrice} = useSelector((state)=>state)
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
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={store} addFeature = {addFeature}/>
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};



export default App;

