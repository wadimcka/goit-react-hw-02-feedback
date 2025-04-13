import React, { Component } from 'react';
import { CiFaceFrown, CiFaceMeh, CiFaceSmile } from 'react-icons/ci';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistic from './Statistic/Statistic';
import Notification from './Notification/Notification';

import css from './Notification/Notification.module.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    currentMood: null,
  };

  onFeedbackBtn = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
      currentMood: option,
    }));
  };

  showSmile = option => {
    switch (option) {
      case 'good':
        return <CiFaceSmile className={`${css.icon} ${css.good}`} />;
      case 'neutral':
        return <CiFaceMeh className={`${css.icon} ${css.neutral}`} />;
      case 'bad':
        return <CiFaceFrown className={`${css.icon} ${css.bad}`} />;
      default:
        return <p>There is no feedback</p>;
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();

    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  };

  render() {
    const options = Object.keys(this.state).filter(
      option => option !== 'currentMood'
    );
    const { good, neutral, bad, currentMood } = this.state;
    const smile = this.showSmile(currentMood);
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onFeedbackBtn={this.onFeedbackBtn}
          />
        </Section>
        {totalFeedback > 0 ? (
          <Section title="Statistic">
            <Notification message={smile} />
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
