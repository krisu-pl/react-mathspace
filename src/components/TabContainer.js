import React from 'react';

const TabContainer = () => {
  return (
    <div className="tabs-container">
      <div className="tab tab--active">
        <img src="assets/img/tick@2x.png" className="tab__image" alt="Topics" />
      </div>
      <div className="tab">
        <img src="assets/img/piechart@2x.png" className="tab__image" alt="Chart" />
      </div>
      <div className="tab">
        <img src="assets/img/linegraph@2x.png" className="tab__image" alt="Graph" />
      </div>
    </div>
  );
};

export default TabContainer;
