import React, { Component } from 'react';

import Header from '../components/Header'
import Timeline from '../components/Timeline'
import CardContainer from '../components/CardContainer'
import TabContainer from '../components/TabContainer'

class App extends Component {
  constructor() {
    super();

    this.state = {
      topic: {
        title: "Geometry"
      },
      subtopics: [
        { index: 1, title: "Triangles", completed: true },
        { index: 2, title: "Angle Sum", completed: true },
        { index: 3, title: "Similar Triangles", completed: true },
        { index: 4, title: "Congruence", completed: false },
        { index: 5, title: "Enlargements", completed: false },
        { index: 6, title: "Parallel Lines", completed: false },
        { index: 7, title: "Pythagoras Theorem", completed: false },
        { index: 8, title: "Revision", completed: false },
        { index: 9, title: "Topic Test", completed: false }
      ],
      currentSubtopic: 3,
    }

    this.handleSubtopicChange = this.handleSubtopicChange.bind(this);
    this.handleSelectDone = this.handleSelectDone.bind(this);
  }

  handleSubtopicChange(id) {
    this.setState({
      currentSubtopic: id,
    });
  }

  handleSelectDone(id) {
    const subtopics = this.state.subtopics;
    const updateIndex = subtopics.findIndex(el => el.index === id)
    const subtopic = subtopics[updateIndex]
    const updatedSubtopic = { ...subtopic, completed: true }
    const updatedSubtopics = [
      ...subtopics.slice(0, updateIndex),
      updatedSubtopic,
      ...subtopics.slice(updateIndex + 1),
    ]
    this.setState({
      subtopics: updatedSubtopics,
    });
  }

  render() {
    return (
      <div className="main">
        <Header title={this.state.topic.title} />
        <Timeline
          subtopics={this.state.subtopics}
          current={this.state.currentSubtopic}
          handleSubtopicChange={this.handleSubtopicChange}
        />
        <CardContainer
          subtopics={this.state.subtopics}
          current={this.state.currentSubtopic}
          handleSubtopicChange={this.handleSubtopicChange}
          handleSelectDone={this.handleSelectDone}
        />
        <TabContainer />
      </div>
    )
  }
}

export default App;
