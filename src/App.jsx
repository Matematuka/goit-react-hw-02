import { useEffect, useState } from "react";
import Description from "./components/Desription/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const initialValue = { good: 0, neutral: 0, bad: 0 }

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const stringifiedFeedback = localStorage.getItem("feedbackStats");
    const parsedFeedback = JSON.parse(stringifiedFeedback) ?? initialValue;
    return parsedFeedback;
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setFeedback (initialValue)
  }

const totalFeedback = feedback.good +  feedback.neutral + feedback.bad;
const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem("feedbackStats", JSON.stringify(feedback))
  }, [feedback]);

  return <div>
    <Description />
    <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
    {totalFeedback > 0 ? 
      <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} /> : <Notification />}
  </div>
};

export default App
