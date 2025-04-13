import css from './Statistic.module.css';

export default function Statistic({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className={css.statisticList}>
      <li className={css.statisticItem}>Good: {good}</li>
      <li className={css.statisticItem}>Neutral: {neutral}</li>
      <li className={css.statisticItem}>Bad: {bad}</li>
      <li className={css.statisticItem}>Total: {total}</li>
      <li className={css.statisticItem}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
}
