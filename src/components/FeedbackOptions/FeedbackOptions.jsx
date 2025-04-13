import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onFeedbackBtn }) {
  return (
    <div className={css.btnWraper}>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            className={css.optionButton}
            onClick={() => {
              onFeedbackBtn(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
