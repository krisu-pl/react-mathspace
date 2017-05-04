import React from 'react';
import PropTypes from 'prop-types';

const getClassName = ({ isCompleted, isCurrent }) => {
  return `step 
          ${isCompleted ? 'step--done' : 'step--todo'} 
          ${isCurrent ? 'step--current' : ''}`
}

const Step = ({ index, isCompleted, isCurrent, handleSubtopicChange }) => {
  const bindedHandleSubtopicChange = handleSubtopicChange.bind(null, index)
  return (
    <li className={getClassName({ isCompleted, isCurrent })}
        onClick={bindedHandleSubtopicChange}
    >
      <span>{index}</span>
    </li>
  );
};

Step.propTypes = {
  index: PropTypes.number,
  isCompleted: PropTypes.bool,
  isCurrent: PropTypes.bool,
  handleSubtopicChange: PropTypes.func.isRequired
};
Step.defaultProps = {};

export default Step;
