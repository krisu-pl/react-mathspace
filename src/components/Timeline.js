import React from 'react';
import PropTypes from 'prop-types';

import Step from './Step'

const renderSteps = ({ subtopics, current, handleSubtopicChange }) => (
  subtopics.map((subtopic) => (
      <Step key={subtopic.index}
            index={subtopic.index}
            isCompleted={subtopic.completed}
            isCurrent={current === subtopic.index}
            handleSubtopicChange={handleSubtopicChange}
            />
  ))
)

const getInlineStyle = (current) => {
  const visibleSteps = 6;
  const defaultTransform = 7;
  const translateXValue = (current > visibleSteps - 2)
    ? defaultTransform + (-1 * 46 * (current - (visibleSteps / 2) - 1))
    : defaultTransform;
  return {
    transform: `translateX(${translateXValue}px)`
  }
}

const getLeftArrowClassName = (current) => (
  `timeline__arrow 
  timeline__arrow--left 
  ${current === 1 ? 'timeline__arrow--disabled' : ''}`
)

const getRightArrowClassName = (current, count) => (
  `timeline__arrow 
  timeline__arrow--right 
  ${current === count ? 'timeline__arrow--disabled' : ''}`
)

const Timeline = ({ subtopics, current, handleSubtopicChange }) => {
  const goToPreviousTopic = handleSubtopicChange.bind(null, current - 1)
  const goToNextTopic = handleSubtopicChange.bind(null, current + 1)
  return (
    <div className="timeline">
      <div className={getLeftArrowClassName(current)} onClick={goToPreviousTopic} />
      <div className="timeline__steps">

        <ul className="timeline__steps-container" style={getInlineStyle(current)}>
          { renderSteps({ subtopics, current, handleSubtopicChange }) }
        </ul>
      </div>
      <div className={getRightArrowClassName(current, subtopics.length)} onClick={goToNextTopic} />
    </div>
  );
};

Timeline.propTypes = {
  subtopics: PropTypes.arrayOf(PropTypes.object),
  current: PropTypes.number,
  handleSubtopicChange: PropTypes.func.isRequired
};
Timeline.defaultProps = {};

export default Timeline;
