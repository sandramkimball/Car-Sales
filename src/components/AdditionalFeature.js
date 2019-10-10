import React from 'react';

const AdditionalFeature = props => {
  return (
    <li>
      <button className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;

/*
const handleChange = e => {
  setFeatures(e.target.value)
};

const handleSubmit = e => {
  e.preventDefault();
};

onClick={()=> dispatch({type: 'SET_ADDITIONAL_FEATURES"})}
*/