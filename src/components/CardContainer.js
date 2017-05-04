import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card'

const renderCards = ({ subtopics, current, handleSubtopicChange, handleSelectDone }) => (
  subtopics.map((subtopic) => (
    <Card key={subtopic.index}
          subtopic={subtopic}
          isCurrent={current === subtopic.index}
          handleSubtopicChange={handleSubtopicChange}
          handleSelectDone={handleSelectDone}
    />
  ))
)

const getInlineStyle = (current) => {
  const translateXValue = (-1 * (current - 1) * 325) + 25;
  return {
    transform: `translateX(${translateXValue}px)`
  }
}

const CardContainer = ({ subtopics, current, handleSubtopicChange, handleSelectDone }) => {
  return (
    <div className="cards-container">
      <div className="cards-container__scrollable" style={getInlineStyle(current)}>
        { renderCards({ subtopics, current, handleSubtopicChange, handleSelectDone }) }
      </div>
    </div>

  );
};

CardContainer.propTypes = {
  subtopics: PropTypes.arrayOf(PropTypes.object),
  current: PropTypes.number,
  handleSubtopicChange: PropTypes.func.isRequired,
  handleSelectDone: PropTypes.func.isRequired
};
CardContainer.defaultProps = {};

export default CardContainer;
