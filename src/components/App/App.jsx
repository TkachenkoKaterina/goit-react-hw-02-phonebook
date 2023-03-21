import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import {Container} from 'components/App/App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good * 100 / (this.state.good + this.state.neutral + this.state.bad))
  }

  updateCountFeedback = (event) => {
    this.setState((prevState) => ({
            [event.target.name]: prevState[event.target.name] + 1,
    }))

  };

  render() {
    console.log(Object.keys(this.state));
    const { good, neutral, bad } = this.state;
    return (
    <Container>
      <Section title = "Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.updateCountFeedback}></FeedbackOptions>
      </Section>

      <Section title='Statistics'>
        {this.countTotalFeedback() > 0 
        ? <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        positivePercentage={`${this.countPositiveFeedbackPercentage()} %`}>
        </Statistics>
        : <Notification message='There is no feedback' />}
        </Section>

    </Container>)}}


