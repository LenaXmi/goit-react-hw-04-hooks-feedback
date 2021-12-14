import { useState } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Feedback/Statistics';
import Section from './Feedback/Section';
import Notification from './Feedback/Notification';
import './App.css';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const arrOptions = ['good', 'neutral', 'bad'];

  const onOptionClick = option => {
    if (option === 'good') {
      setGood(good + 1);
    }
    if (option === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (option === 'bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) + '%';
  };
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={arrOptions} onLeaveFeedback={onOptionClick} />
      </Section>
      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}

//Class component without hooks

// class App extends Component {
//   static defaultProps = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   state = {
//     good: this.props.good,
//     neutral: this.props.neutral,
//     bad: this.props.bad,
//   };
//   onOptionClick = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;

//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return (
//       Math.round((this.state.good / this.countTotalFeedback()) * 100) + '%'
//     );
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const keysArr = Object.keys(this.state);

//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={keysArr}
//             onLeaveFeedback={this.onOptionClick}
//           />
//         </Section>
//         {this.countTotalFeedback() > 0 ? (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positiveFeedback={this.countPositiveFeedbackPercentage()}
//             />
//           </Section>
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </div>
//     );
//   }
// }
export default App;
