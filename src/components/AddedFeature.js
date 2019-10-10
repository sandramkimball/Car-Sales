import React from 'react';

const AddedFeature = props => {

  return (
    <li >
      <button className="button" onClick={()=> props.removeFeature(props.feature)}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;

/*
const handleChange = e => {
  setFeatures(e.target.value)
};

const handleSubmit = e => {
  e.preventDefault();
};

onClick={()=> dispatch({type: 'REMOVE_FEATURE"})}
*/