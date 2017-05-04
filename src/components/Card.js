import React from 'react';
import PropTypes from 'prop-types';

const getClassName = (isCurrent) => {
  return `card ${isCurrent ? 'card--active' : ''}`
}

const getCardStatusClassName = (isCompleted) => {
  return `card__status ${isCompleted ? 'card__status--done' : ''}`
}

const Card = ({ subtopic, isCurrent, handleSubtopicChange, handleSelectDone }) => {
  const bindedHandleSubtopicChange = handleSubtopicChange.bind(null, subtopic.index)
  const bindedHandleSelectDone = handleSelectDone.bind(null, subtopic.index)
  return (
    <div className={getClassName(isCurrent)} onClick={bindedHandleSubtopicChange}>
      <div className="card__header">
        <p className="card__title">{subtopic.index}. {subtopic.title}</p>
        <div className={getCardStatusClassName(subtopic.completed)} />
      </div>
      <div className="card__footer">
        <button className="btn btn--primary" onClick={bindedHandleSelectDone}>Let's go</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  subtopic: PropTypes.shape({
    index: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool
  }),
  isCurrent: PropTypes.bool,
  handleSubtopicChange: PropTypes.func.isRequired,
  handleSelectDone: PropTypes.func.isRequired
};
Card.defaultProps = {};

export default Card;
