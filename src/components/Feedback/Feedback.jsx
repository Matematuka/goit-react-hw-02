import css from "./Feedback.module.css"

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
    
  return (
<div className={css.feedbackBox}>
    {totalFeedback > 0 &&
        <ul>
            <li>Good: {feedback.good} </li>
            <li>Neutral: {feedback.neutral}</li>
            <li>Bad: {feedback.bad}</li>
            <li className={css.total}>Total: {totalFeedback}</li>
            <li className={css.positive}>Positive: {positiveFeedback}%</li>
    </ul>}
</div>
)
}

export default Feedback