import React from 'react';
import PropTypes from 'prop-types';


const ScreenRow = (props) => {
  return (
    <div className="form-control">
      <input type="text" className="input-group" readOnly value={props.value}/>
    </div>
  )
};

ScreenRow.propTypes = {
  value: PropTypes.string.isRequired
};

export default ScreenRow;